import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageAttachmentMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    blobUrl: z.literal(true).optional(),
    filename: z.literal(true).optional(),
    type: z.literal(true).optional(),
    messageId: z.literal(true).optional(),
  })
  .strict();

export const MessageAttachmentMinAggregateInputObjectSchema = Schema;
