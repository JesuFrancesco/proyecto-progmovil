import { z } from 'zod';
import { MessageCreateWithoutChatMessagesInputObjectSchema } from './MessageCreateWithoutChatMessagesInput.schema';
import { MessageUncheckedCreateWithoutChatMessagesInputObjectSchema } from './MessageUncheckedCreateWithoutChatMessagesInput.schema';
import { MessageCreateOrConnectWithoutChatMessagesInputObjectSchema } from './MessageCreateOrConnectWithoutChatMessagesInput.schema';
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageCreateNestedOneWithoutChatMessagesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MessageCreateWithoutChatMessagesInputObjectSchema),
          z.lazy(
            () => MessageUncheckedCreateWithoutChatMessagesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => MessageCreateOrConnectWithoutChatMessagesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => MessageWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const MessageCreateNestedOneWithoutChatMessagesInputObjectSchema =
  Schema;
