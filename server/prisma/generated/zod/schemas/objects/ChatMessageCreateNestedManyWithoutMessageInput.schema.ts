import { z } from 'zod';
import { ChatMessageCreateWithoutMessageInputObjectSchema } from './ChatMessageCreateWithoutMessageInput.schema';
import { ChatMessageUncheckedCreateWithoutMessageInputObjectSchema } from './ChatMessageUncheckedCreateWithoutMessageInput.schema';
import { ChatMessageCreateOrConnectWithoutMessageInputObjectSchema } from './ChatMessageCreateOrConnectWithoutMessageInput.schema';
import { ChatMessageWhereUniqueInputObjectSchema } from './ChatMessageWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatMessageCreateNestedManyWithoutMessageInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ChatMessageCreateWithoutMessageInputObjectSchema),
          z
            .lazy(() => ChatMessageCreateWithoutMessageInputObjectSchema)
            .array(),
          z.lazy(
            () => ChatMessageUncheckedCreateWithoutMessageInputObjectSchema,
          ),
          z
            .lazy(
              () => ChatMessageUncheckedCreateWithoutMessageInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ChatMessageCreateOrConnectWithoutMessageInputObjectSchema,
          ),
          z
            .lazy(
              () => ChatMessageCreateOrConnectWithoutMessageInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ChatMessageWhereUniqueInputObjectSchema),
          z.lazy(() => ChatMessageWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ChatMessageCreateNestedManyWithoutMessageInputObjectSchema =
  Schema;
