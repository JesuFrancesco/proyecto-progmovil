import { z } from 'zod';
import { UserCreateNestedManyWithoutDepartmentoInputObjectSchema } from './UserCreateNestedManyWithoutDepartmentoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DepartmentoCreateWithoutProvinciasInput> = z
  .object({
    name: z.string(),
    users: z
      .lazy(() => UserCreateNestedManyWithoutDepartmentoInputObjectSchema)
      .optional(),
  })
  .strict();

export const DepartmentoCreateWithoutProvinciasInputObjectSchema = Schema;
