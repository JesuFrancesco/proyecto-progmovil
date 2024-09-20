import { z } from 'zod';
import { ProductCreateWithoutProductRatingsInputObjectSchema } from './ProductCreateWithoutProductRatingsInput.schema';
import { ProductUncheckedCreateWithoutProductRatingsInputObjectSchema } from './ProductUncheckedCreateWithoutProductRatingsInput.schema';
import { ProductCreateOrConnectWithoutProductRatingsInputObjectSchema } from './ProductCreateOrConnectWithoutProductRatingsInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateNestedOneWithoutProductRatingsInput> =
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
      connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const ProductCreateNestedOneWithoutProductRatingsInputObjectSchema =
  Schema;
