import { z } from 'zod';
import { ProductQuestionWhereUniqueInputObjectSchema } from './ProductQuestionWhereUniqueInput.schema';
import { ProductQuestionUpdateWithoutProductInputObjectSchema } from './ProductQuestionUpdateWithoutProductInput.schema';
import { ProductQuestionUncheckedUpdateWithoutProductInputObjectSchema } from './ProductQuestionUncheckedUpdateWithoutProductInput.schema';
import { ProductQuestionCreateWithoutProductInputObjectSchema } from './ProductQuestionCreateWithoutProductInput.schema';
import { ProductQuestionUncheckedCreateWithoutProductInputObjectSchema } from './ProductQuestionUncheckedCreateWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductQuestionUpsertWithWhereUniqueWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => ProductQuestionWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ProductQuestionUpdateWithoutProductInputObjectSchema),
        z.lazy(
          () => ProductQuestionUncheckedUpdateWithoutProductInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => ProductQuestionCreateWithoutProductInputObjectSchema),
        z.lazy(
          () => ProductQuestionUncheckedCreateWithoutProductInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProductQuestionUpsertWithWhereUniqueWithoutProductInputObjectSchema =
  Schema;
