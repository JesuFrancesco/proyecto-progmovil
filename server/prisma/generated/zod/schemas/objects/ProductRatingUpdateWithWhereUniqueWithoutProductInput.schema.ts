import { z } from 'zod';
import { ProductRatingWhereUniqueInputObjectSchema } from './ProductRatingWhereUniqueInput.schema';
import { ProductRatingUpdateWithoutProductInputObjectSchema } from './ProductRatingUpdateWithoutProductInput.schema';
import { ProductRatingUncheckedUpdateWithoutProductInputObjectSchema } from './ProductRatingUncheckedUpdateWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductRatingUpdateWithWhereUniqueWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => ProductRatingWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ProductRatingUpdateWithoutProductInputObjectSchema),
        z.lazy(
          () => ProductRatingUncheckedUpdateWithoutProductInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProductRatingUpdateWithWhereUniqueWithoutProductInputObjectSchema =
  Schema;
