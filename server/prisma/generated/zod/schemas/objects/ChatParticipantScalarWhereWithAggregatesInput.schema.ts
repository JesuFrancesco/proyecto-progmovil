import { z } from 'zod';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatParticipantScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(
            () => ChatParticipantScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () => ChatParticipantScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(() => ChatParticipantScalarWhereWithAggregatesInputObjectSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(
            () => ChatParticipantScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () => ChatParticipantScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      chatId: z
        .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
        .optional(),
      userId: z
        .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
        .optional(),
    })
    .strict();

export const ChatParticipantScalarWhereWithAggregatesInputObjectSchema = Schema;
