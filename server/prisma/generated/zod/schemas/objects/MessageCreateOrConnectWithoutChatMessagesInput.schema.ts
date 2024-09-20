import { z } from 'zod';
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageCreateWithoutChatMessagesInputObjectSchema } from './MessageCreateWithoutChatMessagesInput.schema';
import { MessageUncheckedCreateWithoutChatMessagesInputObjectSchema } from './MessageUncheckedCreateWithoutChatMessagesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageCreateOrConnectWithoutChatMessagesInput> =
  z
    .object({
      where: z.lazy(() => MessageWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => MessageCreateWithoutChatMessagesInputObjectSchema),
        z.lazy(
          () => MessageUncheckedCreateWithoutChatMessagesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MessageCreateOrConnectWithoutChatMessagesInputObjectSchema =
  Schema;
