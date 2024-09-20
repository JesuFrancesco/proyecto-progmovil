import { z } from 'zod';
import { UserCreateWithoutProductQuestionsInputObjectSchema } from './UserCreateWithoutProductQuestionsInput.schema';
import { UserUncheckedCreateWithoutProductQuestionsInputObjectSchema } from './UserUncheckedCreateWithoutProductQuestionsInput.schema';
import { UserCreateOrConnectWithoutProductQuestionsInputObjectSchema } from './UserCreateOrConnectWithoutProductQuestionsInput.schema';
import { UserUpsertWithoutProductQuestionsInputObjectSchema } from './UserUpsertWithoutProductQuestionsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutProductQuestionsInputObjectSchema } from './UserUpdateWithoutProductQuestionsInput.schema';
import { UserUncheckedUpdateWithoutProductQuestionsInputObjectSchema } from './UserUncheckedUpdateWithoutProductQuestionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutProductQuestionsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutProductQuestionsInputObjectSchema),
          z.lazy(
            () => UserUncheckedCreateWithoutProductQuestionsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutProductQuestionsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutProductQuestionsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutProductQuestionsInputObjectSchema),
          z.lazy(
            () => UserUncheckedUpdateWithoutProductQuestionsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutProductQuestionsNestedInputObjectSchema =
  Schema;
