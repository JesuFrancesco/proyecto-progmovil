import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatParticipantScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ChatParticipantScalarWhereInputObjectSchema),
        z.lazy(() => ChatParticipantScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ChatParticipantScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ChatParticipantScalarWhereInputObjectSchema),
        z.lazy(() => ChatParticipantScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    chatId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    userId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
  })
  .strict();

export const ChatParticipantScalarWhereInputObjectSchema = Schema;
