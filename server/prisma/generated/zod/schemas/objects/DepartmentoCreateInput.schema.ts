import { z } from 'zod';
import { ProvinciaCreateNestedManyWithoutDepartmentoInputObjectSchema } from './ProvinciaCreateNestedManyWithoutDepartmentoInput.schema';
import { UserCreateNestedManyWithoutDepartmentoInputObjectSchema } from './UserCreateNestedManyWithoutDepartmentoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DepartmentoCreateInput> = z
  .object({
    name: z.string(),
    provincias: z
      .lazy(() => ProvinciaCreateNestedManyWithoutDepartmentoInputObjectSchema)
      .optional(),
    users: z
      .lazy(() => UserCreateNestedManyWithoutDepartmentoInputObjectSchema)
      .optional(),
  })
  .strict();

export const DepartmentoCreateInputObjectSchema = Schema;
