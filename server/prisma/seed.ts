import "dotenv/config";
import { Client, DatabaseError } from "pg";
import fs from "fs";

const sql = new Client({
  connectionString: process.env.DIRECT_URL,
});

async function main() {
  await sql.connect();
  console.log("Proceso iniciado");

  const x = await sql.query(`
     create or replace function public.handle_new_user()
     returns trigger as $$
     begin
     insert into public.profiles (id)
         values (new.id);
         return new;
         end;
         $$ language plpgsql security definer;
         `);

  await sql.query(`
     create or replace trigger on_auth_user_created
         after insert on auth.users
         for each row execute procedure public.handle_new_user();
   `);

  await sql.query(`
     create or replace function public.handle_user_delete()
     returns trigger as $$
     begin
       delete from auth.users where id = old.id;
       return old;
     end;
     $$ language plpgsql security definer;
   `);

  await sql.query(`
    create or replace trigger on_profile_user_deleted
    after delete on public.profiles
    for each row execute procedure public.handle_user_delete()
    `);

  console.log(
    "Se han agregado los triggers y funciones que se vinculan con supabase."
  );

  // static
  try {
    const paisesData = fs.readFileSync("seeders/paises.sql", "utf-8");
    await sql.query(paisesData);
  } catch (error: unknown) {
    if (error instanceof DatabaseError) {
      console.warn("Error en DB");
      console.error(error);
    }
  }

  try {
    const ubigeosData = fs.readFileSync("seeders/ubigeos.sql", "utf-8");
    await sql.query(ubigeosData);
  } catch (error: unknown) {
    if (error instanceof DatabaseError) {
      console.warn("Error en DB");
      console.error(error);
    }
  }

  console.log("Proceso de seeding terminado");

  process.exit();
}

main();
