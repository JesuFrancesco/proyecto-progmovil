import { z } from 'zod';
import { ProductRatingWhereUniqueInputObjectSchema } from './ProductRatingWhereUniqueInput.schema';
import { ProductRatingUpdateWithoutUserInputObjectSchema } from './ProductRatingUpdateWithoutUserInput.schema';
import { ProductRatingUncheckedUpdateWithoutUserInputObjectSchema } from './ProductRatingUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductRatingUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => ProductRatingWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ProductRatingUpdateWithoutUserInputObjectSchema),
        z.lazy(() => ProductRatingUncheckedUpdateWithoutUserInputObjectSchema),
      ]),
    })
    .strict();

export const ProductRatingUpdateWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
