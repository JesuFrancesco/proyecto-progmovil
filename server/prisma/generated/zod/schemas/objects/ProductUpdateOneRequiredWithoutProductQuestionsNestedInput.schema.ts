import { z } from 'zod';
import { ProductCreateWithoutProductQuestionsInputObjectSchema } from './ProductCreateWithoutProductQuestionsInput.schema';
import { ProductUncheckedCreateWithoutProductQuestionsInputObjectSchema } from './ProductUncheckedCreateWithoutProductQuestionsInput.schema';
import { ProductCreateOrConnectWithoutProductQuestionsInputObjectSchema } from './ProductCreateOrConnectWithoutProductQuestionsInput.schema';
import { ProductUpsertWithoutProductQuestionsInputObjectSchema } from './ProductUpsertWithoutProductQuestionsInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithoutProductQuestionsInputObjectSchema } from './ProductUpdateWithoutProductQuestionsInput.schema';
import { ProductUncheckedUpdateWithoutProductQuestionsInputObjectSchema } from './ProductUncheckedUpdateWithoutProductQuestionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpdateOneRequiredWithoutProductQuestionsNestedInput> =
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
      upsert: z
        .lazy(() => ProductUpsertWithoutProductQuestionsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ProductUpdateWithoutProductQuestionsInputObjectSchema),
          z.lazy(
            () =>
              ProductUncheckedUpdateWithoutProductQuestionsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const ProductUpdateOneRequiredWithoutProductQuestionsNestedInputObjectSchema =
  Schema;
