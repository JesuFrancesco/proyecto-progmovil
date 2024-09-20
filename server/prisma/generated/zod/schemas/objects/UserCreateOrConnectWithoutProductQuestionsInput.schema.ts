import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutProductQuestionsInputObjectSchema } from './UserCreateWithoutProductQuestionsInput.schema';
import { UserUncheckedCreateWithoutProductQuestionsInputObjectSchema } from './UserUncheckedCreateWithoutProductQuestionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutProductQuestionsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutProductQuestionsInputObjectSchema),
        z.lazy(
          () => UserUncheckedCreateWithoutProductQuestionsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserCreateOrConnectWithoutProductQuestionsInputObjectSchema =
  Schema;
