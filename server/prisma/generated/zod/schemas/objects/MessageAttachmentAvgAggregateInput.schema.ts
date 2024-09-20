import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageAttachmentAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    messageId: z.literal(true).optional(),
  })
  .strict();

export const MessageAttachmentAvgAggregateInputObjectSchema = Schema;
