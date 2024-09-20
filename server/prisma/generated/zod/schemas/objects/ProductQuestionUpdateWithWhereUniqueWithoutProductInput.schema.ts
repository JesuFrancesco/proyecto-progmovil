import { z } from 'zod';
import { ProductQuestionWhereUniqueInputObjectSchema } from './ProductQuestionWhereUniqueInput.schema';
import { ProductQuestionUpdateWithoutProductInputObjectSchema } from './ProductQuestionUpdateWithoutProductInput.schema';
import { ProductQuestionUncheckedUpdateWithoutProductInputObjectSchema } from './ProductQuestionUncheckedUpdateWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductQuestionUpdateWithWhereUniqueWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => ProductQuestionWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ProductQuestionUpdateWithoutProductInputObjectSchema),
        z.lazy(
          () => ProductQuestionUncheckedUpdateWithoutProductInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProductQuestionUpdateWithWhereUniqueWithoutProductInputObjectSchema =
  Schema;
