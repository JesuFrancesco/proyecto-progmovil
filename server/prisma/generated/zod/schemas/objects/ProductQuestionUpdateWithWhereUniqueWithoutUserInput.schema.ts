import { z } from 'zod';
import { ProductQuestionWhereUniqueInputObjectSchema } from './ProductQuestionWhereUniqueInput.schema';
import { ProductQuestionUpdateWithoutUserInputObjectSchema } from './ProductQuestionUpdateWithoutUserInput.schema';
import { ProductQuestionUncheckedUpdateWithoutUserInputObjectSchema } from './ProductQuestionUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductQuestionUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => ProductQuestionWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ProductQuestionUpdateWithoutUserInputObjectSchema),
        z.lazy(
          () => ProductQuestionUncheckedUpdateWithoutUserInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProductQuestionUpdateWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
