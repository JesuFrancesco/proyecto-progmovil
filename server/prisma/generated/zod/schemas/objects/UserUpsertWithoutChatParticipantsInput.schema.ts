import { z } from 'zod';
import { UserUpdateWithoutChatParticipantsInputObjectSchema } from './UserUpdateWithoutChatParticipantsInput.schema';
import { UserUncheckedUpdateWithoutChatParticipantsInputObjectSchema } from './UserUncheckedUpdateWithoutChatParticipantsInput.schema';
import { UserCreateWithoutChatParticipantsInputObjectSchema } from './UserCreateWithoutChatParticipantsInput.schema';
import { UserUncheckedCreateWithoutChatParticipantsInputObjectSchema } from './UserUncheckedCreateWithoutChatParticipantsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutChatParticipantsInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutChatParticipantsInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutChatParticipantsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutChatParticipantsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutChatParticipantsInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutChatParticipantsInputObjectSchema = Schema;
