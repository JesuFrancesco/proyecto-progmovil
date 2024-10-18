import "dotenv/config";
import postgres from "postgres";
import { PrismaClient } from "@prisma/client";

// const dbUrl = process.env.DATABASE_URL;
const dbUrl = process.env.DIRECT_URL;

if (!dbUrl) {
  throw new Error("Couldn't find db url");
}
const sql = postgres(dbUrl);

async function main() {
  const p = new PrismaClient();
  console.log("proceso de seed iniciado");

  const ej = await p.$queryRaw`select 1 from auth.users`;
  console.log(ej);

  await sql`
     create or replace function public.handle_new_user()
     returns trigger as $$
     begin
         insert into public.profiles (id)
         values (new.id);
         return new;
     end;
     $$ language plpgsql security definer;
     `;
  await sql`
     create or replace trigger on_auth_user_created
         after insert on auth.users
         for each row execute procedure public.handle_new_user();
   `;

  await sql`
     create or replace function public.handle_user_delete()
     returns trigger as $$
     begin
       delete from auth.users where id = old.id;
       return old;
     end;
     $$ language plpgsql security definer;
   `;

  await sql`
     create or replace trigger on_profile_user_deleted
       after delete on public.profiles
       for each row execute procedure public.handle_user_delete()
   `;

  console.log(
    "Se han agregado los triggers y funciones que se vinculan con supabase."
  );
  process.exit();
}

main();
