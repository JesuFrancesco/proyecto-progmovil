import { z } from 'zod';
import { BrandSellerCreateWithoutProductsInputObjectSchema } from './BrandSellerCreateWithoutProductsInput.schema';
import { BrandSellerUncheckedCreateWithoutProductsInputObjectSchema } from './BrandSellerUncheckedCreateWithoutProductsInput.schema';
import { BrandSellerCreateOrConnectWithoutProductsInputObjectSchema } from './BrandSellerCreateOrConnectWithoutProductsInput.schema';
import { BrandSellerUpsertWithoutProductsInputObjectSchema } from './BrandSellerUpsertWithoutProductsInput.schema';
import { BrandSellerWhereUniqueInputObjectSchema } from './BrandSellerWhereUniqueInput.schema';
import { BrandSellerUpdateWithoutProductsInputObjectSchema } from './BrandSellerUpdateWithoutProductsInput.schema';
import { BrandSellerUncheckedUpdateWithoutProductsInputObjectSchema } from './BrandSellerUncheckedUpdateWithoutProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BrandSellerUpdateOneRequiredWithoutProductsNestedInput> =
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
      upsert: z
        .lazy(() => BrandSellerUpsertWithoutProductsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => BrandSellerWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => BrandSellerUpdateWithoutProductsInputObjectSchema),
          z.lazy(
            () => BrandSellerUncheckedUpdateWithoutProductsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const BrandSellerUpdateOneRequiredWithoutProductsNestedInputObjectSchema =
  Schema;
