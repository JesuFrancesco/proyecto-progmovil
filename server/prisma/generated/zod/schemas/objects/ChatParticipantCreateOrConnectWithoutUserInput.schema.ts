import { z } from 'zod';
import { ChatParticipantWhereUniqueInputObjectSchema } from './ChatParticipantWhereUniqueInput.schema';
import { ChatParticipantCreateWithoutUserInputObjectSchema } from './ChatParticipantCreateWithoutUserInput.schema';
import { ChatParticipantUncheckedCreateWithoutUserInputObjectSchema } from './ChatParticipantUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatParticipantCreateOrConnectWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => ChatParticipantWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ChatParticipantCreateWithoutUserInputObjectSchema),
        z.lazy(
          () => ChatParticipantUncheckedCreateWithoutUserInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ChatParticipantCreateOrConnectWithoutUserInputObjectSchema =
  Schema;
