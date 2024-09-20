import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProductAttachmentCountOrderByAggregateInputObjectSchema } from './ProductAttachmentCountOrderByAggregateInput.schema';
import { ProductAttachmentAvgOrderByAggregateInputObjectSchema } from './ProductAttachmentAvgOrderByAggregateInput.schema';
import { ProductAttachmentMaxOrderByAggregateInputObjectSchema } from './ProductAttachmentMaxOrderByAggregateInput.schema';
import { ProductAttachmentMinOrderByAggregateInputObjectSchema } from './ProductAttachmentMinOrderByAggregateInput.schema';
import { ProductAttachmentSumOrderByAggregateInputObjectSchema } from './ProductAttachmentSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductAttachmentOrderByWithAggregationInput> = z
  .object({
    imageUrl: z.lazy(() => SortOrderSchema).optional(),
    productId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ProductAttachmentCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => ProductAttachmentAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => ProductAttachmentMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => ProductAttachmentMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => ProductAttachmentSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProductAttachmentOrderByWithAggregationInputObjectSchema = Schema;
