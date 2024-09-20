import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ChatMessageListRelationFilterObjectSchema } from './ChatMessageListRelationFilter.schema';
import { ChatParticipantListRelationFilterObjectSchema } from './ChatParticipantListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ChatWhereInputObjectSchema),
        z.lazy(() => ChatWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ChatWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ChatWhereInputObjectSchema),
        z.lazy(() => ChatWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    chatMessage: z
      .lazy(() => ChatMessageListRelationFilterObjectSchema)
      .optional(),
    chatParticipants: z
      .lazy(() => ChatParticipantListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const ChatWhereInputObjectSchema = Schema;
