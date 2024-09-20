import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { ChatRelationFilterObjectSchema } from './ChatRelationFilter.schema';
import { ChatWhereInputObjectSchema } from './ChatWhereInput.schema';
import { MessageRelationFilterObjectSchema } from './MessageRelationFilter.schema';
import { MessageWhereInputObjectSchema } from './MessageWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatMessageWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ChatMessageWhereInputObjectSchema),
        z.lazy(() => ChatMessageWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ChatMessageWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ChatMessageWhereInputObjectSchema),
        z.lazy(() => ChatMessageWhereInputObjectSchema).array(),
      ])
      .optional(),
    chatId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    messageId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    chat: z
      .union([
        z.lazy(() => ChatRelationFilterObjectSchema),
        z.lazy(() => ChatWhereInputObjectSchema),
      ])
      .optional(),
    message: z
      .union([
        z.lazy(() => MessageRelationFilterObjectSchema),
        z.lazy(() => MessageWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ChatMessageWhereInputObjectSchema = Schema;
