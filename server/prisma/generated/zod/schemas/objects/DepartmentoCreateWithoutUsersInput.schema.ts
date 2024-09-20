import { z } from 'zod';
import { ProvinciaCreateNestedManyWithoutDepartmentoInputObjectSchema } from './ProvinciaCreateNestedManyWithoutDepartmentoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DepartmentoCreateWithoutUsersInput> = z
  .object({
    name: z.string(),
    provincias: z
      .lazy(() => ProvinciaCreateNestedManyWithoutDepartmentoInputObjectSchema)
      .optional(),
  })
  .strict();

export const DepartmentoCreateWithoutUsersInputObjectSchema = Schema;
