import { z } from 'zod';
import { UserUncheckedCreateNestedManyWithoutDepartmentoInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutDepartmentoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DepartmentoUncheckedCreateWithoutProvinciasInput> =
  z
    .object({
      id: z.number().optional(),
      name: z.string(),
      users: z
        .lazy(
          () =>
            UserUncheckedCreateNestedManyWithoutDepartmentoInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const DepartmentoUncheckedCreateWithoutProvinciasInputObjectSchema =
  Schema;
