import { z } from 'zod';
import { AccountCreateNestedOneWithoutMessagesInputObjectSchema } from './AccountCreateNestedOneWithoutMessagesInput.schema';
import { ChatMessageCreateNestedManyWithoutMessageInputObjectSchema } from './ChatMessageCreateNestedManyWithoutMessageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageCreateWithoutMessageAttachmentsInput> = z
  .object({
    text: z.string(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    status: z.number(),
    account: z.lazy(
      () => AccountCreateNestedOneWithoutMessagesInputObjectSchema,
    ),
    chatMessages: z
      .lazy(() => ChatMessageCreateNestedManyWithoutMessageInputObjectSchema)
      .optional(),
  })
  .strict();

export const MessageCreateWithoutMessageAttachmentsInputObjectSchema = Schema;
