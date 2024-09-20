import { z } from 'zod';
import { AccountCreateNestedOneWithoutMessagesInputObjectSchema } from './AccountCreateNestedOneWithoutMessagesInput.schema';
import { MessageAttachmentCreateNestedManyWithoutMessageInputObjectSchema } from './MessageAttachmentCreateNestedManyWithoutMessageInput.schema';
import { ChatMessageCreateNestedManyWithoutMessageInputObjectSchema } from './ChatMessageCreateNestedManyWithoutMessageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageCreateInput> = z
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
    chatMessages: z
      .lazy(() => ChatMessageCreateNestedManyWithoutMessageInputObjectSchema)
      .optional(),
  })
  .strict();

export const MessageCreateInputObjectSchema = Schema;
