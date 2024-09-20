import { z } from 'zod';
import { ProductCreateNestedOneWithoutProductRatingsInputObjectSchema } from './ProductCreateNestedOneWithoutProductRatingsInput.schema';
import { RatingAttachmentCreateNestedManyWithoutProductRatingInputObjectSchema } from './RatingAttachmentCreateNestedManyWithoutProductRatingInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductRatingCreateWithoutUserInput> = z
  .object({
    score: z.number(),
    text: z.string(),
    createdAt: z.coerce.date(),
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

export const ProductRatingCreateWithoutUserInputObjectSchema = Schema;
