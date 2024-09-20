import { z } from 'zod';
import { ChatParticipantWhereUniqueInputObjectSchema } from './ChatParticipantWhereUniqueInput.schema';
import { ChatParticipantUpdateWithoutUserInputObjectSchema } from './ChatParticipantUpdateWithoutUserInput.schema';
import { ChatParticipantUncheckedUpdateWithoutUserInputObjectSchema } from './ChatParticipantUncheckedUpdateWithoutUserInput.schema';
import { ChatParticipantCreateWithoutUserInputObjectSchema } from './ChatParticipantCreateWithoutUserInput.schema';
import { ChatParticipantUncheckedCreateWithoutUserInputObjectSchema } from './ChatParticipantUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatParticipantUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => ChatParticipantWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ChatParticipantUpdateWithoutUserInputObjectSchema),
        z.lazy(
          () => ChatParticipantUncheckedUpdateWithoutUserInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => ChatParticipantCreateWithoutUserInputObjectSchema),
        z.lazy(
          () => ChatParticipantUncheckedCreateWithoutUserInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ChatParticipantUpsertWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
