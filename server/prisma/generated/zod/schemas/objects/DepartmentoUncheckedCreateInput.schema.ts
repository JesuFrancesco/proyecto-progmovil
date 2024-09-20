import { z } from 'zod';
import { ProvinciaUncheckedCreateNestedManyWithoutDepartmentoInputObjectSchema } from './ProvinciaUncheckedCreateNestedManyWithoutDepartmentoInput.schema';
import { UserUncheckedCreateNestedManyWithoutDepartmentoInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutDepartmentoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DepartmentoUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    provincias: z
      .lazy(
        () =>
          ProvinciaUncheckedCreateNestedManyWithoutDepartmentoInputObjectSchema,
      )
      .optional(),
    users: z
      .lazy(
        () => UserUncheckedCreateNestedManyWithoutDepartmentoInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const DepartmentoUncheckedCreateInputObjectSchema = Schema;
