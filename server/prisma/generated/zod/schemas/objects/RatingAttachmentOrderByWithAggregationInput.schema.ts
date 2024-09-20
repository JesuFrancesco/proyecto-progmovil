import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RatingAttachmentCountOrderByAggregateInputObjectSchema } from './RatingAttachmentCountOrderByAggregateInput.schema';
import { RatingAttachmentAvgOrderByAggregateInputObjectSchema } from './RatingAttachmentAvgOrderByAggregateInput.schema';
import { RatingAttachmentMaxOrderByAggregateInputObjectSchema } from './RatingAttachmentMaxOrderByAggregateInput.schema';
import { RatingAttachmentMinOrderByAggregateInputObjectSchema } from './RatingAttachmentMinOrderByAggregateInput.schema';
import { RatingAttachmentSumOrderByAggregateInputObjectSchema } from './RatingAttachmentSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RatingAttachmentOrderByWithAggregationInput> = z
  .object({
    blobUrl: z.lazy(() => SortOrderSchema).optional(),
    filename: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    ratingId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => RatingAttachmentCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => RatingAttachmentAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => RatingAttachmentMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => RatingAttachmentMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => RatingAttachmentSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const RatingAttachmentOrderByWithAggregationInputObjectSchema = Schema;
