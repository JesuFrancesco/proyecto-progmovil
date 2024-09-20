import { z } from 'zod';
import { MessageCreateNestedOneWithoutMessageAttachmentsInputObjectSchema } from './MessageCreateNestedOneWithoutMessageAttachmentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageAttachmentCreateInput> = z
  .object({
    blobUrl: z.string(),
    filename: z.string(),
    type: z.string(),
    message: z.lazy(
      () => MessageCreateNestedOneWithoutMessageAttachmentsInputObjectSchema,
    ),
  })
  .strict();

export const MessageAttachmentCreateInputObjectSchema = Schema;
