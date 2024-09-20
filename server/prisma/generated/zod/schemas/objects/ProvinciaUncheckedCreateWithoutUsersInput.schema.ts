import { z } from 'zod';
import { DistritoUncheckedCreateNestedManyWithoutProvinciaInputObjectSchema } from './DistritoUncheckedCreateNestedManyWithoutProvinciaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProvinciaUncheckedCreateWithoutUsersInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    departmentoId: z.number(),
    distritos: z
      .lazy(
        () =>
          DistritoUncheckedCreateNestedManyWithoutProvinciaInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ProvinciaUncheckedCreateWithoutUsersInputObjectSchema = Schema;
