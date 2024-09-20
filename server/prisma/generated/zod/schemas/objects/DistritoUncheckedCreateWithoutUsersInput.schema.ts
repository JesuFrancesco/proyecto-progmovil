import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DistritoUncheckedCreateWithoutUsersInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    provinciaId: z.number(),
  })
  .strict();

export const DistritoUncheckedCreateWithoutUsersInputObjectSchema = Schema;
