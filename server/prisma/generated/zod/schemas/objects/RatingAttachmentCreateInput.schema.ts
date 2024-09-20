import { z } from 'zod';
import { ProductRatingCreateNestedOneWithoutRatingAttachmentsInputObjectSchema } from './ProductRatingCreateNestedOneWithoutRatingAttachmentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RatingAttachmentCreateInput> = z
  .object({
    blobUrl: z.string(),
    filename: z.string(),
    type: z.string(),
    productRating: z.lazy(
      () =>
        ProductRatingCreateNestedOneWithoutRatingAttachmentsInputObjectSchema,
    ),
  })
  .strict();

export const RatingAttachmentCreateInputObjectSchema = Schema;
