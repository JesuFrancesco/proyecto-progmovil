import { z } from 'zod';
import { MessageAttachmentCreateNestedManyWithoutMessageInputObjectSchema } from './MessageAttachmentCreateNestedManyWithoutMessageInput.schema';
import { ChatMessageCreateNestedManyWithoutMessageInputObjectSchema } from './ChatMessageCreateNestedManyWithoutMessageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageCreateWithoutAccountInput> = z
  .object({
    text: z.string(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    status: z.number(),
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

export const MessageCreateWithoutAccountInputObjectSchema = Schema;
