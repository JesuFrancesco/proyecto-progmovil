import { z } from 'zod';
import { ChatParticipantWhereInputObjectSchema } from './ChatParticipantWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatParticipantListRelationFilter> = z
  .object({
    every: z.lazy(() => ChatParticipantWhereInputObjectSchema).optional(),
    some: z.lazy(() => ChatParticipantWhereInputObjectSchema).optional(),
    none: z.lazy(() => ChatParticipantWhereInputObjectSchema).optional(),
  })
  .strict();

export const ChatParticipantListRelationFilterObjectSchema = Schema;
