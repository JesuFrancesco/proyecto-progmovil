import { z } from 'zod';
import { ProductRatingCreateWithoutUserInputObjectSchema } from './ProductRatingCreateWithoutUserInput.schema';
import { ProductRatingUncheckedCreateWithoutUserInputObjectSchema } from './ProductRatingUncheckedCreateWithoutUserInput.schema';
import { ProductRatingCreateOrConnectWithoutUserInputObjectSchema } from './ProductRatingCreateOrConnectWithoutUserInput.schema';
import { ProductRatingWhereUniqueInputObjectSchema } from './ProductRatingWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductRatingCreateNestedManyWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProductRatingCreateWithoutUserInputObjectSchema),
          z.lazy(() => ProductRatingCreateWithoutUserInputObjectSchema).array(),
          z.lazy(
            () => ProductRatingUncheckedCreateWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () => ProductRatingUncheckedCreateWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ProductRatingCreateOrConnectWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () => ProductRatingCreateOrConnectWithoutUserInputObjectSchema,
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

export const ProductRatingCreateNestedManyWithoutUserInputObjectSchema = Schema;
