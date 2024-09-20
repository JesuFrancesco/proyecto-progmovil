import { z } from 'zod';
import { BrandSellerCreateWithoutProductsInputObjectSchema } from './BrandSellerCreateWithoutProductsInput.schema';
import { BrandSellerUncheckedCreateWithoutProductsInputObjectSchema } from './BrandSellerUncheckedCreateWithoutProductsInput.schema';
import { BrandSellerCreateOrConnectWithoutProductsInputObjectSchema } from './BrandSellerCreateOrConnectWithoutProductsInput.schema';
import { BrandSellerWhereUniqueInputObjectSchema } from './BrandSellerWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BrandSellerCreateNestedOneWithoutProductsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BrandSellerCreateWithoutProductsInputObjectSchema),
          z.lazy(
            () => BrandSellerUncheckedCreateWithoutProductsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => BrandSellerCreateOrConnectWithoutProductsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => BrandSellerWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const BrandSellerCreateNestedOneWithoutProductsInputObjectSchema =
  Schema;
