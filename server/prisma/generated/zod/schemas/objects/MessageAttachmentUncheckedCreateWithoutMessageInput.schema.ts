import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageAttachmentUncheckedCreateWithoutMessageInput> =
  z
    .object({
      id: z.number().optional(),
      blobUrl: z.string(),
      filename: z.string(),
      type: z.string(),
    })
    .strict();

export const MessageAttachmentUncheckedCreateWithoutMessageInputObjectSchema =
  Schema;
