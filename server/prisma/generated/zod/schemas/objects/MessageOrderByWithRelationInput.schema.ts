import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AccountOrderByWithRelationInputObjectSchema } from './AccountOrderByWithRelationInput.schema';
import { MessageAttachmentOrderByRelationAggregateInputObjectSchema } from './MessageAttachmentOrderByRelationAggregateInput.schema';
import { ChatMessageOrderByRelationAggregateInputObjectSchema } from './ChatMessageOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    text: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    accountId: z.lazy(() => SortOrderSchema).optional(),
    account: z
      .lazy(() => AccountOrderByWithRelationInputObjectSchema)
      .optional(),
    messageAttachments: z
      .lazy(() => MessageAttachmentOrderByRelationAggregateInputObjectSchema)
      .optional(),
    chatMessages: z
      .lazy(() => ChatMessageOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const MessageOrderByWithRelationInputObjectSchema = Schema;
