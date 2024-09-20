import { z } from 'zod';
import { RatingAttachmentUncheckedCreateNestedManyWithoutProductRatingInputObjectSchema } from './RatingAttachmentUncheckedCreateNestedManyWithoutProductRatingInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductRatingUncheckedCreateWithoutUserInput> = z
  .object({
    id: z.number().optional(),
    score: z.number(),
    text: z.string(),
    createdAt: z.coerce.date(),
    productId: z.number(),
    ratingAttachments: z
      .lazy(
        () =>
          RatingAttachmentUncheckedCreateNestedManyWithoutProductRatingInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ProductRatingUncheckedCreateWithoutUserInputObjectSchema = Schema;
