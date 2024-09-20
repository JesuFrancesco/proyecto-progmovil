import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatMessageScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ChatMessageScalarWhereInputObjectSchema),
        z.lazy(() => ChatMessageScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ChatMessageScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ChatMessageScalarWhereInputObjectSchema),
        z.lazy(() => ChatMessageScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    chatId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    messageId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
  })
  .strict();

export const ChatMessageScalarWhereInputObjectSchema = Schema;
