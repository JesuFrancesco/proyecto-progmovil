import { z } from 'zod';
import { ProductUpdateWithoutProductRatingsInputObjectSchema } from './ProductUpdateWithoutProductRatingsInput.schema';
import { ProductUncheckedUpdateWithoutProductRatingsInputObjectSchema } from './ProductUncheckedUpdateWithoutProductRatingsInput.schema';
import { ProductCreateWithoutProductRatingsInputObjectSchema } from './ProductCreateWithoutProductRatingsInput.schema';
import { ProductUncheckedCreateWithoutProductRatingsInputObjectSchema } from './ProductUncheckedCreateWithoutProductRatingsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpsertWithoutProductRatingsInput> = z
  .object({
    update: z.union([
      z.lazy(() => ProductUpdateWithoutProductRatingsInputObjectSchema),
      z.lazy(
        () => ProductUncheckedUpdateWithoutProductRatingsInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => ProductCreateWithoutProductRatingsInputObjectSchema),
      z.lazy(
        () => ProductUncheckedCreateWithoutProductRatingsInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const ProductUpsertWithoutProductRatingsInputObjectSchema = Schema;
