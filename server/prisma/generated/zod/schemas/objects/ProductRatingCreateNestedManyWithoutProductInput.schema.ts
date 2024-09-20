import { z } from 'zod';
import { ProductRatingCreateWithoutProductInputObjectSchema } from './ProductRatingCreateWithoutProductInput.schema';
import { ProductRatingUncheckedCreateWithoutProductInputObjectSchema } from './ProductRatingUncheckedCreateWithoutProductInput.schema';
import { ProductRatingCreateOrConnectWithoutProductInputObjectSchema } from './ProductRatingCreateOrConnectWithoutProductInput.schema';
import { ProductRatingWhereUniqueInputObjectSchema } from './ProductRatingWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductRatingCreateNestedManyWithoutProductInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProductRatingCreateWithoutProductInputObjectSchema),
          z
            .lazy(() => ProductRatingCreateWithoutProductInputObjectSchema)
            .array(),
          z.lazy(
            () => ProductRatingUncheckedCreateWithoutProductInputObjectSchema,
          ),
          z
            .lazy(
              () => ProductRatingUncheckedCreateWithoutProductInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ProductRatingCreateOrConnectWithoutProductInputObjectSchema,
          ),
          z
            .lazy(
              () => ProductRatingCreateOrConnectWithoutProductInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ProductRatingWhereUniqueInputObjectSchema),
          z.lazy(() => ProductRatingWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ProductRatingCreateNestedManyWithoutProductInputObjectSchema =
  Schema;
