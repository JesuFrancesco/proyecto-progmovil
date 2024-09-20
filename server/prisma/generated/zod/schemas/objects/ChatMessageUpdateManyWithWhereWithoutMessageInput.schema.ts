import { z } from 'zod';
import { ChatMessageScalarWhereInputObjectSchema } from './ChatMessageScalarWhereInput.schema';
import { ChatMessageUpdateManyMutationInputObjectSchema } from './ChatMessageUpdateManyMutationInput.schema';
import { ChatMessageUncheckedUpdateManyWithoutChatMessagesInputObjectSchema } from './ChatMessageUncheckedUpdateManyWithoutChatMessagesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatMessageUpdateManyWithWhereWithoutMessageInput> =
  z
    .object({
      where: z.lazy(() => ChatMessageScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ChatMessageUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            ChatMessageUncheckedUpdateManyWithoutChatMessagesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ChatMessageUpdateManyWithWhereWithoutMessageInputObjectSchema =
  Schema;
