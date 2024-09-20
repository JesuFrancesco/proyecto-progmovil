import { z } from 'zod';
import { ProductQuestionUpdateWithoutQuestionRepliesInputObjectSchema } from './ProductQuestionUpdateWithoutQuestionRepliesInput.schema';
import { ProductQuestionUncheckedUpdateWithoutQuestionRepliesInputObjectSchema } from './ProductQuestionUncheckedUpdateWithoutQuestionRepliesInput.schema';
import { ProductQuestionCreateWithoutQuestionRepliesInputObjectSchema } from './ProductQuestionCreateWithoutQuestionRepliesInput.schema';
import { ProductQuestionUncheckedCreateWithoutQuestionRepliesInputObjectSchema } from './ProductQuestionUncheckedCreateWithoutQuestionRepliesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductQuestionUpsertWithoutQuestionRepliesInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () => ProductQuestionUpdateWithoutQuestionRepliesInputObjectSchema,
        ),
        z.lazy(
          () =>
            ProductQuestionUncheckedUpdateWithoutQuestionRepliesInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () => ProductQuestionCreateWithoutQuestionRepliesInputObjectSchema,
        ),
        z.lazy(
          () =>
            ProductQuestionUncheckedCreateWithoutQuestionRepliesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProductQuestionUpsertWithoutQuestionRepliesInputObjectSchema =
  Schema;
