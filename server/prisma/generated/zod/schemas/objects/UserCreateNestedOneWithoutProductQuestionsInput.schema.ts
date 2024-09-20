import { z } from 'zod';
import { UserCreateWithoutProductQuestionsInputObjectSchema } from './UserCreateWithoutProductQuestionsInput.schema';
import { UserUncheckedCreateWithoutProductQuestionsInputObjectSchema } from './UserUncheckedCreateWithoutProductQuestionsInput.schema';
import { UserCreateOrConnectWithoutProductQuestionsInputObjectSchema } from './UserCreateOrConnectWithoutProductQuestionsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutProductQuestionsInput> =
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
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutProductQuestionsInputObjectSchema =
  Schema;
