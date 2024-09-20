import { z } from 'zod';
import { ProductQuestionWhereUniqueInputObjectSchema } from './ProductQuestionWhereUniqueInput.schema';
import { ProductQuestionCreateWithoutQuestionRepliesInputObjectSchema } from './ProductQuestionCreateWithoutQuestionRepliesInput.schema';
import { ProductQuestionUncheckedCreateWithoutQuestionRepliesInputObjectSchema } from './ProductQuestionUncheckedCreateWithoutQuestionRepliesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductQuestionCreateOrConnectWithoutQuestionRepliesInput> =
  z
    .object({
      where: z.lazy(() => ProductQuestionWhereUniqueInputObjectSchema),
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

export const ProductQuestionCreateOrConnectWithoutQuestionRepliesInputObjectSchema =
  Schema;
