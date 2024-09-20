import { z } from 'zod';
import { ChatParticipantCreateWithoutUserInputObjectSchema } from './ChatParticipantCreateWithoutUserInput.schema';
import { ChatParticipantUncheckedCreateWithoutUserInputObjectSchema } from './ChatParticipantUncheckedCreateWithoutUserInput.schema';
import { ChatParticipantCreateOrConnectWithoutUserInputObjectSchema } from './ChatParticipantCreateOrConnectWithoutUserInput.schema';
import { ChatParticipantWhereUniqueInputObjectSchema } from './ChatParticipantWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatParticipantCreateNestedManyWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ChatParticipantCreateWithoutUserInputObjectSchema),
          z
            .lazy(() => ChatParticipantCreateWithoutUserInputObjectSchema)
            .array(),
          z.lazy(
            () => ChatParticipantUncheckedCreateWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () => ChatParticipantUncheckedCreateWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ChatParticipantCreateOrConnectWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () => ChatParticipantCreateOrConnectWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ChatParticipantWhereUniqueInputObjectSchema),
          z.lazy(() => ChatParticipantWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ChatParticipantCreateNestedManyWithoutUserInputObjectSchema =
  Schema;
