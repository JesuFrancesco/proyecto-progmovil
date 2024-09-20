import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ChatOrderByWithRelationInputObjectSchema } from './ChatOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatParticipantOrderByWithRelationInput> = z
  .object({
    chatId: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    chat: z.lazy(() => ChatOrderByWithRelationInputObjectSchema).optional(),
    user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const ChatParticipantOrderByWithRelationInputObjectSchema = Schema;
