import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductTagUncheckedCreateWithoutProductInput> = z
  .object({
    categoryId: z.number(),
  })
  .strict();

export const ProductTagUncheckedCreateWithoutProductInputObjectSchema = Schema;
