import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageAttachmentUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    blobUrl: z.string(),
    filename: z.string(),
    type: z.string(),
    messageId: z.number(),
  })
  .strict();

export const MessageAttachmentUncheckedCreateInputObjectSchema = Schema;
