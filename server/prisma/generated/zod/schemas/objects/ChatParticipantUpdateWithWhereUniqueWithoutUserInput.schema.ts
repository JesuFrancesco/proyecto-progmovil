import { z } from 'zod';
import { ChatParticipantWhereUniqueInputObjectSchema } from './ChatParticipantWhereUniqueInput.schema';
import { ChatParticipantUpdateWithoutUserInputObjectSchema } from './ChatParticipantUpdateWithoutUserInput.schema';
import { ChatParticipantUncheckedUpdateWithoutUserInputObjectSchema } from './ChatParticipantUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatParticipantUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => ChatParticipantWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ChatParticipantUpdateWithoutUserInputObjectSchema),
        z.lazy(
          () => ChatParticipantUncheckedUpdateWithoutUserInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ChatParticipantUpdateWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
