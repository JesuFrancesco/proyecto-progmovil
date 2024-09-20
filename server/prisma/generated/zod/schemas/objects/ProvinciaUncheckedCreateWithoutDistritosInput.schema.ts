import { z } from 'zod';
import { UserUncheckedCreateNestedManyWithoutProvinciaInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutProvinciaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProvinciaUncheckedCreateWithoutDistritosInput> =
  z
    .object({
      id: z.number().optional(),
      name: z.string(),
      departmentoId: z.number(),
      users: z
        .lazy(
          () => UserUncheckedCreateNestedManyWithoutProvinciaInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const ProvinciaUncheckedCreateWithoutDistritosInputObjectSchema = Schema;
