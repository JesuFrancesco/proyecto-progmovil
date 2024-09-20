import { z } from 'zod';
import { UserCreateNestedOneWithoutProductRatingsInputObjectSchema } from './UserCreateNestedOneWithoutProductRatingsInput.schema';
import { ProductCreateNestedOneWithoutProductRatingsInputObjectSchema } from './ProductCreateNestedOneWithoutProductRatingsInput.schema';
import { RatingAttachmentCreateNestedManyWithoutProductRatingInputObjectSchema } from './RatingAttachmentCreateNestedManyWithoutProductRatingInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductRatingCreateInput> = z
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
    ratingAttachments: z
      .lazy(
        () =>
          RatingAttachmentCreateNestedManyWithoutProductRatingInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ProductRatingCreateInputObjectSchema = Schema;
