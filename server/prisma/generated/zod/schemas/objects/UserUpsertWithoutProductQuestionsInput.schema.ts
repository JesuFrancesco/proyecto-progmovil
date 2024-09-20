import { z } from 'zod';
import { UserUpdateWithoutProductQuestionsInputObjectSchema } from './UserUpdateWithoutProductQuestionsInput.schema';
import { UserUncheckedUpdateWithoutProductQuestionsInputObjectSchema } from './UserUncheckedUpdateWithoutProductQuestionsInput.schema';
import { UserCreateWithoutProductQuestionsInputObjectSchema } from './UserCreateWithoutProductQuestionsInput.schema';
import { UserUncheckedCreateWithoutProductQuestionsInputObjectSchema } from './UserUncheckedCreateWithoutProductQuestionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutProductQuestionsInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutProductQuestionsInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutProductQuestionsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutProductQuestionsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutProductQuestionsInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutProductQuestionsInputObjectSchema = Schema;
