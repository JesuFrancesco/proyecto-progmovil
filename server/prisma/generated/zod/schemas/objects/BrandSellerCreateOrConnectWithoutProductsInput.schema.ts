import { z } from 'zod';
import { BrandSellerWhereUniqueInputObjectSchema } from './BrandSellerWhereUniqueInput.schema';
import { BrandSellerCreateWithoutProductsInputObjectSchema } from './BrandSellerCreateWithoutProductsInput.schema';
import { BrandSellerUncheckedCreateWithoutProductsInputObjectSchema } from './BrandSellerUncheckedCreateWithoutProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BrandSellerCreateOrConnectWithoutProductsInput> =
  z
    .object({
      where: z.lazy(() => BrandSellerWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => BrandSellerCreateWithoutProductsInputObjectSchema),
        z.lazy(
          () => BrandSellerUncheckedCreateWithoutProductsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BrandSellerCreateOrConnectWithoutProductsInputObjectSchema =
  Schema;
