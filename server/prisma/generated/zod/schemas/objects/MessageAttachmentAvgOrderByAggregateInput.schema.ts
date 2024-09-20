import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageAttachmentAvgOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    messageId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const MessageAttachmentAvgOrderByAggregateInputObjectSchema = Schema;
