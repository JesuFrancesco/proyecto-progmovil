import { z } from 'zod';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithoutBrandSellerInputObjectSchema } from './ProductUpdateWithoutBrandSellerInput.schema';
import { ProductUncheckedUpdateWithoutBrandSellerInputObjectSchema } from './ProductUncheckedUpdateWithoutBrandSellerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpdateWithWhereUniqueWithoutBrandSellerInput> =
  z
    .object({
      where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ProductUpdateWithoutBrandSellerInputObjectSchema),
        z.lazy(() => ProductUncheckedUpdateWithoutBrandSellerInputObjectSchema),
      ]),
    })
    .strict();

export const ProductUpdateWithWhereUniqueWithoutBrandSellerInputObjectSchema =
  Schema;
