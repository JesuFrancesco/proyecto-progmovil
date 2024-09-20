import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutChatParticipantsInputObjectSchema } from './UserCreateWithoutChatParticipantsInput.schema';
import { UserUncheckedCreateWithoutChatParticipantsInputObjectSchema } from './UserUncheckedCreateWithoutChatParticipantsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutChatParticipantsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutChatParticipantsInputObjectSchema),
        z.lazy(
          () => UserUncheckedCreateWithoutChatParticipantsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserCreateOrConnectWithoutChatParticipantsInputObjectSchema =
  Schema;
