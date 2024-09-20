import { z } from 'zod';
import { ProductQuestionWhereUniqueInputObjectSchema } from './ProductQuestionWhereUniqueInput.schema';
import { ProductQuestionCreateWithoutProductInputObjectSchema } from './ProductQuestionCreateWithoutProductInput.schema';
import { ProductQuestionUncheckedCreateWithoutProductInputObjectSchema } from './ProductQuestionUncheckedCreateWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductQuestionCreateOrConnectWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => ProductQuestionWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ProductQuestionCreateWithoutProductInputObjectSchema),
        z.lazy(
          () => ProductQuestionUncheckedCreateWithoutProductInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProductQuestionCreateOrConnectWithoutProductInputObjectSchema =
  Schema;
