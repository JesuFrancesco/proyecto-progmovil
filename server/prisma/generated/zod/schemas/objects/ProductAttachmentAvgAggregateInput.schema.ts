import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductAttachmentAvgAggregateInputType> = z
  .object({
    productId: z.literal(true).optional(),
  })
  .strict();

export const ProductAttachmentAvgAggregateInputObjectSchema = Schema;
