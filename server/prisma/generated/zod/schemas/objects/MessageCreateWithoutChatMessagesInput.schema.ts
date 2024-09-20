import { z } from 'zod';
import { AccountCreateNestedOneWithoutMessagesInputObjectSchema } from './AccountCreateNestedOneWithoutMessagesInput.schema';
import { MessageAttachmentCreateNestedManyWithoutMessageInputObjectSchema } from './MessageAttachmentCreateNestedManyWithoutMessageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageCreateWithoutChatMessagesInput> = z
  .object({
    text: z.string(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    status: z.number(),
    account: z.lazy(
      () => AccountCreateNestedOneWithoutMessagesInputObjectSchema,
    ),
    messageAttachments: z
      .lazy(
        () => MessageAttachmentCreateNestedManyWithoutMessageInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const MessageCreateWithoutChatMessagesInputObjectSchema = Schema;
