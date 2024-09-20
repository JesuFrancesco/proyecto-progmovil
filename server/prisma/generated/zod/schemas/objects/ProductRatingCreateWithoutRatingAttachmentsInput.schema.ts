import { z } from 'zod';
import { UserCreateNestedOneWithoutProductRatingsInputObjectSchema } from './UserCreateNestedOneWithoutProductRatingsInput.schema';
import { ProductCreateNestedOneWithoutProductRatingsInputObjectSchema } from './ProductCreateNestedOneWithoutProductRatingsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductRatingCreateWithoutRatingAttachmentsInput> =
  z
    .object({
      score: z.number(),
      text: z.string(),
      createdAt: z.coerce.date(),
      user: z.lazy(
        () => UserCreateNestedOneWithoutProductRatingsInputObjectSchema,
      ),
      product: z.lazy(
        () => ProductCreateNestedOneWithoutProductRatingsInputObjectSchema,
      ),
    })
    .strict();

export const ProductRatingCreateWithoutRatingAttachmentsInputObjectSchema =
  Schema;
