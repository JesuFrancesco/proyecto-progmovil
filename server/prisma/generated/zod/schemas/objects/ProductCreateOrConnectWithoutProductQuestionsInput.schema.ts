import { z } from 'zod';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductCreateWithoutProductQuestionsInputObjectSchema } from './ProductCreateWithoutProductQuestionsInput.schema';
import { ProductUncheckedCreateWithoutProductQuestionsInputObjectSchema } from './ProductUncheckedCreateWithoutProductQuestionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateOrConnectWithoutProductQuestionsInput> =
  z
    .object({
      where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ProductCreateWithoutProductQuestionsInputObjectSchema),
        z.lazy(
          () => ProductUncheckedCreateWithoutProductQuestionsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProductCreateOrConnectWithoutProductQuestionsInputObjectSchema =
  Schema;
