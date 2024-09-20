import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductAttachmentSumOrderByAggregateInput> = z
  .object({
    productId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ProductAttachmentSumOrderByAggregateInputObjectSchema = Schema;
