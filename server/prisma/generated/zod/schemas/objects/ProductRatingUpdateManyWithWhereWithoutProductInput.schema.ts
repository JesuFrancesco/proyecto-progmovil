import { z } from 'zod';
import { ProductRatingScalarWhereInputObjectSchema } from './ProductRatingScalarWhereInput.schema';
import { ProductRatingUpdateManyMutationInputObjectSchema } from './ProductRatingUpdateManyMutationInput.schema';
import { ProductRatingUncheckedUpdateManyWithoutProductRatingsInputObjectSchema } from './ProductRatingUncheckedUpdateManyWithoutProductRatingsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductRatingUpdateManyWithWhereWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => ProductRatingScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ProductRatingUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            ProductRatingUncheckedUpdateManyWithoutProductRatingsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProductRatingUpdateManyWithWhereWithoutProductInputObjectSchema =
  Schema;
