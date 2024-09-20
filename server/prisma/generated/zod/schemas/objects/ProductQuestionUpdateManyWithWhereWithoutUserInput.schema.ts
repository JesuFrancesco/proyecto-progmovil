import { z } from 'zod';
import { ProductQuestionScalarWhereInputObjectSchema } from './ProductQuestionScalarWhereInput.schema';
import { ProductQuestionUpdateManyMutationInputObjectSchema } from './ProductQuestionUpdateManyMutationInput.schema';
import { ProductQuestionUncheckedUpdateManyWithoutProductQuestionsInputObjectSchema } from './ProductQuestionUncheckedUpdateManyWithoutProductQuestionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductQuestionUpdateManyWithWhereWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => ProductQuestionScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ProductQuestionUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            ProductQuestionUncheckedUpdateManyWithoutProductQuestionsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProductQuestionUpdateManyWithWhereWithoutUserInputObjectSchema =
  Schema;
