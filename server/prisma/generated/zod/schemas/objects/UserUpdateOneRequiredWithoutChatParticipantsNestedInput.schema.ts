import { z } from 'zod';
import { UserCreateWithoutChatParticipantsInputObjectSchema } from './UserCreateWithoutChatParticipantsInput.schema';
import { UserUncheckedCreateWithoutChatParticipantsInputObjectSchema } from './UserUncheckedCreateWithoutChatParticipantsInput.schema';
import { UserCreateOrConnectWithoutChatParticipantsInputObjectSchema } from './UserCreateOrConnectWithoutChatParticipantsInput.schema';
import { UserUpsertWithoutChatParticipantsInputObjectSchema } from './UserUpsertWithoutChatParticipantsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutChatParticipantsInputObjectSchema } from './UserUpdateWithoutChatParticipantsInput.schema';
import { UserUncheckedUpdateWithoutChatParticipantsInputObjectSchema } from './UserUncheckedUpdateWithoutChatParticipantsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutChatParticipantsNestedInput> =
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
      upsert: z
        .lazy(() => UserUpsertWithoutChatParticipantsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutChatParticipantsInputObjectSchema),
          z.lazy(
            () => UserUncheckedUpdateWithoutChatParticipantsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutChatParticipantsNestedInputObjectSchema =
  Schema;
