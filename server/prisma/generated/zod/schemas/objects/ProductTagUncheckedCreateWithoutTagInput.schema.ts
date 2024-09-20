import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductTagUncheckedCreateWithoutTagInput> = z
  .object({
    productId: z.number(),
  })
  .strict();

export const ProductTagUncheckedCreateWithoutTagInputObjectSchema = Schema;
