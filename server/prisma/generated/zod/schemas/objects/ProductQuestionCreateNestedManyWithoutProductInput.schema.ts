import { z } from 'zod';
import { ProductQuestionCreateWithoutProductInputObjectSchema } from './ProductQuestionCreateWithoutProductInput.schema';
import { ProductQuestionUncheckedCreateWithoutProductInputObjectSchema } from './ProductQuestionUncheckedCreateWithoutProductInput.schema';
import { ProductQuestionCreateOrConnectWithoutProductInputObjectSchema } from './ProductQuestionCreateOrConnectWithoutProductInput.schema';
import { ProductQuestionWhereUniqueInputObjectSchema } from './ProductQuestionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductQuestionCreateNestedManyWithoutProductInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProductQuestionCreateWithoutProductInputObjectSchema),
          z
            .lazy(() => ProductQuestionCreateWithoutProductInputObjectSchema)
            .array(),
          z.lazy(
            () => ProductQuestionUncheckedCreateWithoutProductInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProductQuestionUncheckedCreateWithoutProductInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ProductQuestionCreateOrConnectWithoutProductInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProductQuestionCreateOrConnectWithoutProductInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ProductQuestionWhereUniqueInputObjectSchema),
          z.lazy(() => ProductQuestionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ProductQuestionCreateNestedManyWithoutProductInputObjectSchema =
  Schema;
