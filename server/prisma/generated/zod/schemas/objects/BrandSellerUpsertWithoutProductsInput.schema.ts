import { z } from 'zod';
import { BrandSellerUpdateWithoutProductsInputObjectSchema } from './BrandSellerUpdateWithoutProductsInput.schema';
import { BrandSellerUncheckedUpdateWithoutProductsInputObjectSchema } from './BrandSellerUncheckedUpdateWithoutProductsInput.schema';
import { BrandSellerCreateWithoutProductsInputObjectSchema } from './BrandSellerCreateWithoutProductsInput.schema';
import { BrandSellerUncheckedCreateWithoutProductsInputObjectSchema } from './BrandSellerUncheckedCreateWithoutProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BrandSellerUpsertWithoutProductsInput> = z
  .object({
    update: z.union([
      z.lazy(() => BrandSellerUpdateWithoutProductsInputObjectSchema),
      z.lazy(() => BrandSellerUncheckedUpdateWithoutProductsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => BrandSellerCreateWithoutProductsInputObjectSchema),
      z.lazy(() => BrandSellerUncheckedCreateWithoutProductsInputObjectSchema),
    ]),
  })
  .strict();

export const BrandSellerUpsertWithoutProductsInputObjectSchema = Schema;
