import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductAttachmentMaxAggregateInputType> = z
  .object({
    imageUrl: z.literal(true).optional(),
    productId: z.literal(true).optional(),
  })
  .strict();

export const ProductAttachmentMaxAggregateInputObjectSchema = Schema;
