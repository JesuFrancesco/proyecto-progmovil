import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductTagUncheckedCreateInput> = z
  .object({
    categoryId: z.number(),
    productId: z.number(),
  })
  .strict();

export const ProductTagUncheckedCreateInputObjectSchema = Schema;
