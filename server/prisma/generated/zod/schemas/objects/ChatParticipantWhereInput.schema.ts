import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { ChatRelationFilterObjectSchema } from './ChatRelationFilter.schema';
import { ChatWhereInputObjectSchema } from './ChatWhereInput.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatParticipantWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ChatParticipantWhereInputObjectSchema),
        z.lazy(() => ChatParticipantWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ChatParticipantWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ChatParticipantWhereInputObjectSchema),
        z.lazy(() => ChatParticipantWhereInputObjectSchema).array(),
      ])
      .optional(),
    chatId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    userId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    chat: z
      .union([
        z.lazy(() => ChatRelationFilterObjectSchema),
        z.lazy(() => ChatWhereInputObjectSchema),
      ])
      .optional(),
    user: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ChatParticipantWhereInputObjectSchema = Schema;
