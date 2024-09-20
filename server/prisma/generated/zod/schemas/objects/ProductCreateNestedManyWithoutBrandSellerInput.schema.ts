import { z } from 'zod';
import { ProductCreateWithoutBrandSellerInputObjectSchema } from './ProductCreateWithoutBrandSellerInput.schema';
import { ProductUncheckedCreateWithoutBrandSellerInputObjectSchema } from './ProductUncheckedCreateWithoutBrandSellerInput.schema';
import { ProductCreateOrConnectWithoutBrandSellerInputObjectSchema } from './ProductCreateOrConnectWithoutBrandSellerInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateNestedManyWithoutBrandSellerInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProductCreateWithoutBrandSellerInputObjectSchema),
          z
            .lazy(() => ProductCreateWithoutBrandSellerInputObjectSchema)
            .array(),
          z.lazy(
            () => ProductUncheckedCreateWithoutBrandSellerInputObjectSchema,
          ),
          z
            .lazy(
              () => ProductUncheckedCreateWithoutBrandSellerInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ProductCreateOrConnectWithoutBrandSellerInputObjectSchema,
          ),
          z
            .lazy(
              () => ProductCreateOrConnectWithoutBrandSellerInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ProductWhereUniqueInputObjectSchema),
          z.lazy(() => ProductWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ProductCreateNestedManyWithoutBrandSellerInputObjectSchema =
  Schema;
