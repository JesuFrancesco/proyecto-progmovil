import { z } from 'zod';
import { ChatMessageWhereInputObjectSchema } from './ChatMessageWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatMessageListRelationFilter> = z
  .object({
    every: z.lazy(() => ChatMessageWhereInputObjectSchema).optional(),
    some: z.lazy(() => ChatMessageWhereInputObjectSchema).optional(),
    none: z.lazy(() => ChatMessageWhereInputObjectSchema).optional(),
  })
  .strict();

export const ChatMessageListRelationFilterObjectSchema = Schema;
