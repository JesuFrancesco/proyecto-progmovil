import { z } from 'zod';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatMessageScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ChatMessageScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => ChatMessageScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ChatMessageScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ChatMessageScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => ChatMessageScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    chatId: z
      .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
    messageId: z
      .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
  })
  .strict();

export const ChatMessageScalarWhereWithAggregatesInputObjectSchema = Schema;
