import { z } from 'zod';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductCreateWithoutBrandSellerInputObjectSchema } from './ProductCreateWithoutBrandSellerInput.schema';
import { ProductUncheckedCreateWithoutBrandSellerInputObjectSchema } from './ProductUncheckedCreateWithoutBrandSellerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateOrConnectWithoutBrandSellerInput> =
  z
    .object({
      where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ProductCreateWithoutBrandSellerInputObjectSchema),
        z.lazy(() => ProductUncheckedCreateWithoutBrandSellerInputObjectSchema),
      ]),
    })
    .strict();

export const ProductCreateOrConnectWithoutBrandSellerInputObjectSchema = Schema;
