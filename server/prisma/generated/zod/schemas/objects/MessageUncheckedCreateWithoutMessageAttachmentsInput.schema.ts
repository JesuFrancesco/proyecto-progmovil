import { z } from 'zod';
import { ChatMessageUncheckedCreateNestedManyWithoutMessageInputObjectSchema } from './ChatMessageUncheckedCreateNestedManyWithoutMessageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageUncheckedCreateWithoutMessageAttachmentsInput> =
  z
    .object({
      id: z.number().optional(),
      text: z.string(),
      createdAt: z.coerce.date(),
      updatedAt: z.coerce.date(),
      status: z.number(),
      accountId: z.number(),
      chatMessages: z
        .lazy(
          () =>
            ChatMessageUncheckedCreateNestedManyWithoutMessageInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const MessageUncheckedCreateWithoutMessageAttachmentsInputObjectSchema =
  Schema;
