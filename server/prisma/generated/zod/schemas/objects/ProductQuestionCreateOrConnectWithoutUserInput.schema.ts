import { z } from 'zod';
import { ProductQuestionWhereUniqueInputObjectSchema } from './ProductQuestionWhereUniqueInput.schema';
import { ProductQuestionCreateWithoutUserInputObjectSchema } from './ProductQuestionCreateWithoutUserInput.schema';
import { ProductQuestionUncheckedCreateWithoutUserInputObjectSchema } from './ProductQuestionUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductQuestionCreateOrConnectWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => ProductQuestionWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ProductQuestionCreateWithoutUserInputObjectSchema),
        z.lazy(
          () => ProductQuestionUncheckedCreateWithoutUserInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProductQuestionCreateOrConnectWithoutUserInputObjectSchema =
  Schema;
