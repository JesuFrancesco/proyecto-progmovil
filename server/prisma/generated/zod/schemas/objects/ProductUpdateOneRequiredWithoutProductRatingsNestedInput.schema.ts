import { z } from 'zod';
import { ProductCreateWithoutProductRatingsInputObjectSchema } from './ProductCreateWithoutProductRatingsInput.schema';
import { ProductUncheckedCreateWithoutProductRatingsInputObjectSchema } from './ProductUncheckedCreateWithoutProductRatingsInput.schema';
import { ProductCreateOrConnectWithoutProductRatingsInputObjectSchema } from './ProductCreateOrConnectWithoutProductRatingsInput.schema';
import { ProductUpsertWithoutProductRatingsInputObjectSchema } from './ProductUpsertWithoutProductRatingsInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithoutProductRatingsInputObjectSchema } from './ProductUpdateWithoutProductRatingsInput.schema';
import { ProductUncheckedUpdateWithoutProductRatingsInputObjectSchema } from './ProductUncheckedUpdateWithoutProductRatingsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpdateOneRequiredWithoutProductRatingsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProductCreateWithoutProductRatingsInputObjectSchema),
          z.lazy(
            () => ProductUncheckedCreateWithoutProductRatingsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => ProductCreateOrConnectWithoutProductRatingsInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => ProductUpsertWithoutProductRatingsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ProductUpdateWithoutProductRatingsInputObjectSchema),
          z.lazy(
            () => ProductUncheckedUpdateWithoutProductRatingsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const ProductUpdateOneRequiredWithoutProductRatingsNestedInputObjectSchema =
  Schema;
