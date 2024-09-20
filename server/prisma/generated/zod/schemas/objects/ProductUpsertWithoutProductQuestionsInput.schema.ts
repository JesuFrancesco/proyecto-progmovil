import { z } from 'zod';
import { ProductUpdateWithoutProductQuestionsInputObjectSchema } from './ProductUpdateWithoutProductQuestionsInput.schema';
import { ProductUncheckedUpdateWithoutProductQuestionsInputObjectSchema } from './ProductUncheckedUpdateWithoutProductQuestionsInput.schema';
import { ProductCreateWithoutProductQuestionsInputObjectSchema } from './ProductCreateWithoutProductQuestionsInput.schema';
import { ProductUncheckedCreateWithoutProductQuestionsInputObjectSchema } from './ProductUncheckedCreateWithoutProductQuestionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpsertWithoutProductQuestionsInput> = z
  .object({
    update: z.union([
      z.lazy(() => ProductUpdateWithoutProductQuestionsInputObjectSchema),
      z.lazy(
        () => ProductUncheckedUpdateWithoutProductQuestionsInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => ProductCreateWithoutProductQuestionsInputObjectSchema),
      z.lazy(
        () => ProductUncheckedCreateWithoutProductQuestionsInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const ProductUpsertWithoutProductQuestionsInputObjectSchema = Schema;
