import { z } from 'zod';
import { ProductQuestionCreateWithoutQuestionRepliesInputObjectSchema } from './ProductQuestionCreateWithoutQuestionRepliesInput.schema';
import { ProductQuestionUncheckedCreateWithoutQuestionRepliesInputObjectSchema } from './ProductQuestionUncheckedCreateWithoutQuestionRepliesInput.schema';
import { ProductQuestionCreateOrConnectWithoutQuestionRepliesInputObjectSchema } from './ProductQuestionCreateOrConnectWithoutQuestionRepliesInput.schema';
import { ProductQuestionWhereUniqueInputObjectSchema } from './ProductQuestionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductQuestionCreateNestedOneWithoutQuestionRepliesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => ProductQuestionCreateWithoutQuestionRepliesInputObjectSchema,
          ),
          z.lazy(
            () =>
              ProductQuestionUncheckedCreateWithoutQuestionRepliesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            ProductQuestionCreateOrConnectWithoutQuestionRepliesInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => ProductQuestionWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const ProductQuestionCreateNestedOneWithoutQuestionRepliesInputObjectSchema =
  Schema;
