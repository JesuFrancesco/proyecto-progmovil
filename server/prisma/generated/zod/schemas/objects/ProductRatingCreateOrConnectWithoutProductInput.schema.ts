import { z } from 'zod';
import { ProductRatingWhereUniqueInputObjectSchema } from './ProductRatingWhereUniqueInput.schema';
import { ProductRatingCreateWithoutProductInputObjectSchema } from './ProductRatingCreateWithoutProductInput.schema';
import { ProductRatingUncheckedCreateWithoutProductInputObjectSchema } from './ProductRatingUncheckedCreateWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductRatingCreateOrConnectWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => ProductRatingWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ProductRatingCreateWithoutProductInputObjectSchema),
        z.lazy(
          () => ProductRatingUncheckedCreateWithoutProductInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProductRatingCreateOrConnectWithoutProductInputObjectSchema =
  Schema;
