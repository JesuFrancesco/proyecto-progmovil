import { z } from 'zod';
import { UserCreateNestedOneWithoutProductRatingsInputObjectSchema } from './UserCreateNestedOneWithoutProductRatingsInput.schema';
import { RatingAttachmentCreateNestedManyWithoutProductRatingInputObjectSchema } from './RatingAttachmentCreateNestedManyWithoutProductRatingInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductRatingCreateWithoutProductInput> = z
  .object({
    score: z.number(),
    text: z.string(),
    createdAt: z.coerce.date(),
    user: z.lazy(
      () => UserCreateNestedOneWithoutProductRatingsInputObjectSchema,
    ),
    ratingAttachments: z
      .lazy(
        () =>
          RatingAttachmentCreateNestedManyWithoutProductRatingInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ProductRatingCreateWithoutProductInputObjectSchema = Schema;
