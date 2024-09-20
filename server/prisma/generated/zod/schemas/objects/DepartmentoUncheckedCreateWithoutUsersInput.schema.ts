import { z } from 'zod';
import { ProvinciaUncheckedCreateNestedManyWithoutDepartmentoInputObjectSchema } from './ProvinciaUncheckedCreateNestedManyWithoutDepartmentoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DepartmentoUncheckedCreateWithoutUsersInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    provincias: z
      .lazy(
        () =>
          ProvinciaUncheckedCreateNestedManyWithoutDepartmentoInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const DepartmentoUncheckedCreateWithoutUsersInputObjectSchema = Schema;
