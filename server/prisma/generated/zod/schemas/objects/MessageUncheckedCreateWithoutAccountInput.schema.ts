import { z } from 'zod';
import { MessageAttachmentUncheckedCreateNestedManyWithoutMessageInputObjectSchema } from './MessageAttachmentUncheckedCreateNestedManyWithoutMessageInput.schema';
import { ChatMessageUncheckedCreateNestedManyWithoutMessageInputObjectSchema } from './ChatMessageUncheckedCreateNestedManyWithoutMessageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageUncheckedCreateWithoutAccountInput> = z
  .object({
    id: z.number().optional(),
    text: z.string(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    status: z.number(),
    messageAttachments: z
      .lazy(
        () =>
          MessageAttachmentUncheckedCreateNestedManyWithoutMessageInputObjectSchema,
      )
      .optional(),
    chatMessages: z
      .lazy(
        () =>
          ChatMessageUncheckedCreateNestedManyWithoutMessageInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const MessageUncheckedCreateWithoutAccountInputObjectSchema = Schema;
