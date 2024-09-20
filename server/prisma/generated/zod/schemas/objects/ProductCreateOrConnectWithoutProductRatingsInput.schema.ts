import { z } from 'zod';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductCreateWithoutProductRatingsInputObjectSchema } from './ProductCreateWithoutProductRatingsInput.schema';
import { ProductUncheckedCreateWithoutProductRatingsInputObjectSchema } from './ProductUncheckedCreateWithoutProductRatingsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateOrConnectWithoutProductRatingsInput> =
  z
    .object({
      where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ProductCreateWithoutProductRatingsInputObjectSchema),
        z.lazy(
          () => ProductUncheckedCreateWithoutProductRatingsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProductCreateOrConnectWithoutProductRatingsInputObjectSchema =
  Schema;
