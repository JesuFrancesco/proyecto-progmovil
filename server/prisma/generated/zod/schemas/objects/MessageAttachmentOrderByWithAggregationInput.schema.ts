import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { MessageAttachmentCountOrderByAggregateInputObjectSchema } from './MessageAttachmentCountOrderByAggregateInput.schema';
import { MessageAttachmentAvgOrderByAggregateInputObjectSchema } from './MessageAttachmentAvgOrderByAggregateInput.schema';
import { MessageAttachmentMaxOrderByAggregateInputObjectSchema } from './MessageAttachmentMaxOrderByAggregateInput.schema';
import { MessageAttachmentMinOrderByAggregateInputObjectSchema } from './MessageAttachmentMinOrderByAggregateInput.schema';
import { MessageAttachmentSumOrderByAggregateInputObjectSchema } from './MessageAttachmentSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageAttachmentOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    blobUrl: z.lazy(() => SortOrderSchema).optional(),
    filename: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    messageId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => MessageAttachmentCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => MessageAttachmentAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => MessageAttachmentMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => MessageAttachmentMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => MessageAttachmentSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const MessageAttachmentOrderByWithAggregationInputObjectSchema = Schema;
