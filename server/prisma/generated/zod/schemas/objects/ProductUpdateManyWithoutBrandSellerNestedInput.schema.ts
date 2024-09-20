import { z } from 'zod';
import { ProductCreateWithoutBrandSellerInputObjectSchema } from './ProductCreateWithoutBrandSellerInput.schema';
import { ProductUncheckedCreateWithoutBrandSellerInputObjectSchema } from './ProductUncheckedCreateWithoutBrandSellerInput.schema';
import { ProductCreateOrConnectWithoutBrandSellerInputObjectSchema } from './ProductCreateOrConnectWithoutBrandSellerInput.schema';
import { ProductUpsertWithWhereUniqueWithoutBrandSellerInputObjectSchema } from './ProductUpsertWithWhereUniqueWithoutBrandSellerInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithWhereUniqueWithoutBrandSellerInputObjectSchema } from './ProductUpdateWithWhereUniqueWithoutBrandSellerInput.schema';
import { ProductUpdateManyWithWhereWithoutBrandSellerInputObjectSchema } from './ProductUpdateManyWithWhereWithoutBrandSellerInput.schema';
import { ProductScalarWhereInputObjectSchema } from './ProductScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpdateManyWithoutBrandSellerNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              ProductUpsertWithWhereUniqueWithoutBrandSellerInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProductUpsertWithWhereUniqueWithoutBrandSellerInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => ProductWhereUniqueInputObjectSchema),
          z.lazy(() => ProductWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ProductWhereUniqueInputObjectSchema),
          z.lazy(() => ProductWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ProductWhereUniqueInputObjectSchema),
          z.lazy(() => ProductWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ProductWhereUniqueInputObjectSchema),
          z.lazy(() => ProductWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ProductUpdateWithWhereUniqueWithoutBrandSellerInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProductUpdateWithWhereUniqueWithoutBrandSellerInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => ProductUpdateManyWithWhereWithoutBrandSellerInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProductUpdateManyWithWhereWithoutBrandSellerInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ProductScalarWhereInputObjectSchema),
          z.lazy(() => ProductScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ProductUpdateManyWithoutBrandSellerNestedInputObjectSchema =
  Schema;
