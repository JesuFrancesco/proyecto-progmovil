import { z } from 'zod';
import { ProductCreateNestedOneWithoutProductQuestionsInputObjectSchema } from './ProductCreateNestedOneWithoutProductQuestionsInput.schema';
import { UserCreateNestedOneWithoutProductQuestionsInputObjectSchema } from './UserCreateNestedOneWithoutProductQuestionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductQuestionCreateWithoutQuestionRepliesInput> =
  z
    .object({
      text: z.string(),
      createdAt: z.coerce.date(),
      product: z.lazy(
        () => ProductCreateNestedOneWithoutProductQuestionsInputObjectSchema,
      ),
      user: z.lazy(
        () => UserCreateNestedOneWithoutProductQuestionsInputObjectSchema,
      ),
    })
    .strict();

export const ProductQuestionCreateWithoutQuestionRepliesInputObjectSchema =
  Schema;
