import { z } from 'zod';
import { ProductCreateWithoutProductQuestionsInputObjectSchema } from './ProductCreateWithoutProductQuestionsInput.schema';
import { ProductUncheckedCreateWithoutProductQuestionsInputObjectSchema } from './ProductUncheckedCreateWithoutProductQuestionsInput.schema';
import { ProductCreateOrConnectWithoutProductQuestionsInputObjectSchema } from './ProductCreateOrConnectWithoutProductQuestionsInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateNestedOneWithoutProductQuestionsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProductCreateWithoutProductQuestionsInputObjectSchema),
          z.lazy(
            () =>
              ProductUncheckedCreateWithoutProductQuestionsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => ProductCreateOrConnectWithoutProductQuestionsInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const ProductCreateNestedOneWithoutProductQuestionsInputObjectSchema =
  Schema;
