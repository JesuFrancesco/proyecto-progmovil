import { z } from 'zod';
import { DistritoUncheckedCreateNestedManyWithoutProvinciaInputObjectSchema } from './DistritoUncheckedCreateNestedManyWithoutProvinciaInput.schema';
import { UserUncheckedCreateNestedManyWithoutProvinciaInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutProvinciaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProvinciaUncheckedCreateWithoutDepartmentoInput> =
  z
    .object({
      id: z.number().optional(),
      name: z.string(),
      distritos: z
        .lazy(
          () =>
            DistritoUncheckedCreateNestedManyWithoutProvinciaInputObjectSchema,
        )
        .optional(),
      users: z
        .lazy(
          () => UserUncheckedCreateNestedManyWithoutProvinciaInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const ProvinciaUncheckedCreateWithoutDepartmentoInputObjectSchema =
  Schema;
