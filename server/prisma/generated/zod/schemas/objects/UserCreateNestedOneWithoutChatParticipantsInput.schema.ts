import { z } from 'zod';
import { UserCreateWithoutChatParticipantsInputObjectSchema } from './UserCreateWithoutChatParticipantsInput.schema';
import { UserUncheckedCreateWithoutChatParticipantsInputObjectSchema } from './UserUncheckedCreateWithoutChatParticipantsInput.schema';
import { UserCreateOrConnectWithoutChatParticipantsInputObjectSchema } from './UserCreateOrConnectWithoutChatParticipantsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutChatParticipantsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutChatParticipantsInputObjectSchema),
          z.lazy(
            () => UserUncheckedCreateWithoutChatParticipantsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutChatParticipantsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutChatParticipantsInputObjectSchema =
  Schema;
