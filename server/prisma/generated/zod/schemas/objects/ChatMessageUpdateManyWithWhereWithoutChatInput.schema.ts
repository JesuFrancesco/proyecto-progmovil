import { z } from 'zod';
import { ChatMessageScalarWhereInputObjectSchema } from './ChatMessageScalarWhereInput.schema';
import { ChatMessageUpdateManyMutationInputObjectSchema } from './ChatMessageUpdateManyMutationInput.schema';
import { ChatMessageUncheckedUpdateManyWithoutChatMessageInputObjectSchema } from './ChatMessageUncheckedUpdateManyWithoutChatMessageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatMessageUpdateManyWithWhereWithoutChatInput> =
  z
    .object({
      where: z.lazy(() => ChatMessageScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ChatMessageUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            ChatMessageUncheckedUpdateManyWithoutChatMessageInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ChatMessageUpdateManyWithWhereWithoutChatInputObjectSchema =
  Schema;
