import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageAttachmentSumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    messageId: z.literal(true).optional(),
  })
  .strict();

export const MessageAttachmentSumAggregateInputObjectSchema = Schema;
