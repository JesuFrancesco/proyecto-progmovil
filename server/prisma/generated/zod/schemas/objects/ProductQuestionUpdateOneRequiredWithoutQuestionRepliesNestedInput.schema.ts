import { z } from 'zod';
import { ProductQuestionCreateWithoutQuestionRepliesInputObjectSchema } from './ProductQuestionCreateWithoutQuestionRepliesInput.schema';
import { ProductQuestionUncheckedCreateWithoutQuestionRepliesInputObjectSchema } from './ProductQuestionUncheckedCreateWithoutQuestionRepliesInput.schema';
import { ProductQuestionCreateOrConnectWithoutQuestionRepliesInputObjectSchema } from './ProductQuestionCreateOrConnectWithoutQuestionRepliesInput.schema';
import { ProductQuestionUpsertWithoutQuestionRepliesInputObjectSchema } from './ProductQuestionUpsertWithoutQuestionRepliesInput.schema';
import { ProductQuestionWhereUniqueInputObjectSchema } from './ProductQuestionWhereUniqueInput.schema';
import { ProductQuestionUpdateWithoutQuestionRepliesInputObjectSchema } from './ProductQuestionUpdateWithoutQuestionRepliesInput.schema';
import { ProductQuestionUncheckedUpdateWithoutQuestionRepliesInputObjectSchema } from './ProductQuestionUncheckedUpdateWithoutQuestionRepliesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductQuestionUpdateOneRequiredWithoutQuestionRepliesNestedInput> =
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
      upsert: z
        .lazy(
          () => ProductQuestionUpsertWithoutQuestionRepliesInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => ProductQuestionWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(
            () => ProductQuestionUpdateWithoutQuestionRepliesInputObjectSchema,
          ),
          z.lazy(
            () =>
              ProductQuestionUncheckedUpdateWithoutQuestionRepliesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const ProductQuestionUpdateOneRequiredWithoutQuestionRepliesNestedInputObjectSchema =
  Schema;
