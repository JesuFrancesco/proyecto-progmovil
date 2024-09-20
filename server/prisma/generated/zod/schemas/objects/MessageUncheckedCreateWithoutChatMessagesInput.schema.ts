import { z } from 'zod';
import { MessageAttachmentUncheckedCreateNestedManyWithoutMessageInputObjectSchema } from './MessageAttachmentUncheckedCreateNestedManyWithoutMessageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageUncheckedCreateWithoutChatMessagesInput> =
  z
    .object({
      id: z.number().optional(),
      text: z.string(),
      createdAt: z.coerce.date(),
      updatedAt: z.coerce.date(),
      status: z.number(),
      accountId: z.number(),
      messageAttachments: z
        .lazy(
          () =>
            MessageAttachmentUncheckedCreateNestedManyWithoutMessageInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const MessageUncheckedCreateWithoutChatMessagesInputObjectSchema =
  Schema;
