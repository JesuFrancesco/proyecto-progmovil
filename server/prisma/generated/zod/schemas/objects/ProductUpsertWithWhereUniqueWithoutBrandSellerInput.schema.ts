import { z } from 'zod';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithoutBrandSellerInputObjectSchema } from './ProductUpdateWithoutBrandSellerInput.schema';
import { ProductUncheckedUpdateWithoutBrandSellerInputObjectSchema } from './ProductUncheckedUpdateWithoutBrandSellerInput.schema';
import { ProductCreateWithoutBrandSellerInputObjectSchema } from './ProductCreateWithoutBrandSellerInput.schema';
import { ProductUncheckedCreateWithoutBrandSellerInputObjectSchema } from './ProductUncheckedCreateWithoutBrandSellerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpsertWithWhereUniqueWithoutBrandSellerInput> =
  z
    .object({
      where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ProductUpdateWithoutBrandSellerInputObjectSchema),
        z.lazy(() => ProductUncheckedUpdateWithoutBrandSellerInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ProductCreateWithoutBrandSellerInputObjectSchema),
        z.lazy(() => ProductUncheckedCreateWithoutBrandSellerInputObjectSchema),
      ]),
    })
    .strict();

export const ProductUpsertWithWhereUniqueWithoutBrandSellerInputObjectSchema =
  Schema;
