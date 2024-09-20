import { z } from 'zod';
import { DistritoCreateNestedManyWithoutProvinciaInputObjectSchema } from './DistritoCreateNestedManyWithoutProvinciaInput.schema';
import { UserCreateNestedManyWithoutProvinciaInputObjectSchema } from './UserCreateNestedManyWithoutProvinciaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProvinciaCreateWithoutDepartmentoInput> = z
  .object({
    name: z.string(),
    distritos: z
      .lazy(() => DistritoCreateNestedManyWithoutProvinciaInputObjectSchema)
      .optional(),
    users: z
      .lazy(() => UserCreateNestedManyWithoutProvinciaInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProvinciaCreateWithoutDepartmentoInputObjectSchema = Schema;
