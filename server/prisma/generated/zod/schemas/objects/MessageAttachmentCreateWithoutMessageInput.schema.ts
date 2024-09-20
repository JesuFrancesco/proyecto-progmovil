import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageAttachmentCreateWithoutMessageInput> = z
  .object({
    blobUrl: z.string(),
    filename: z.string(),
    type: z.string(),
  })
  .strict();

export const MessageAttachmentCreateWithoutMessageInputObjectSchema = Schema;
