import { z } from 'zod';
import { ProductQuestionCreateWithoutUserInputObjectSchema } from './ProductQuestionCreateWithoutUserInput.schema';
import { ProductQuestionUncheckedCreateWithoutUserInputObjectSchema } from './ProductQuestionUncheckedCreateWithoutUserInput.schema';
import { ProductQuestionCreateOrConnectWithoutUserInputObjectSchema } from './ProductQuestionCreateOrConnectWithoutUserInput.schema';
import { ProductQuestionWhereUniqueInputObjectSchema } from './ProductQuestionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductQuestionCreateNestedManyWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProductQuestionCreateWithoutUserInputObjectSchema),
          z
            .lazy(() => ProductQuestionCreateWithoutUserInputObjectSchema)
            .array(),
          z.lazy(
            () => ProductQuestionUncheckedCreateWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () => ProductQuestionUncheckedCreateWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ProductQuestionCreateOrConnectWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () => ProductQuestionCreateOrConnectWithoutUserInputObjectSchema,
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

export const ProductQuestionCreateNestedManyWithoutUserInputObjectSchema =
  Schema;
