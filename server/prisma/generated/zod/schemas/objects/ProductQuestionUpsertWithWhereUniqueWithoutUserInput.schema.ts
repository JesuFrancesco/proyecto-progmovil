import { z } from 'zod';
import { ProductQuestionWhereUniqueInputObjectSchema } from './ProductQuestionWhereUniqueInput.schema';
import { ProductQuestionUpdateWithoutUserInputObjectSchema } from './ProductQuestionUpdateWithoutUserInput.schema';
import { ProductQuestionUncheckedUpdateWithoutUserInputObjectSchema } from './ProductQuestionUncheckedUpdateWithoutUserInput.schema';
import { ProductQuestionCreateWithoutUserInputObjectSchema } from './ProductQuestionCreateWithoutUserInput.schema';
import { ProductQuestionUncheckedCreateWithoutUserInputObjectSchema } from './ProductQuestionUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductQuestionUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => ProductQuestionWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ProductQuestionUpdateWithoutUserInputObjectSchema),
        z.lazy(
          () => ProductQuestionUncheckedUpdateWithoutUserInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => ProductQuestionCreateWithoutUserInputObjectSchema),
        z.lazy(
          () => ProductQuestionUncheckedCreateWithoutUserInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProductQuestionUpsertWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
