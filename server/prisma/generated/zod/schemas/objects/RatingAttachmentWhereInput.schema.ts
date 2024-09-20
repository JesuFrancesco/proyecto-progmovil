import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { ProductRatingRelationFilterObjectSchema } from './ProductRatingRelationFilter.schema';
import { ProductRatingWhereInputObjectSchema } from './ProductRatingWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RatingAttachmentWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => RatingAttachmentWhereInputObjectSchema),
        z.lazy(() => RatingAttachmentWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RatingAttachmentWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RatingAttachmentWhereInputObjectSchema),
        z.lazy(() => RatingAttachmentWhereInputObjectSchema).array(),
      ])
      .optional(),
    blobUrl: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    filename: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    type: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    ratingId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    productRating: z
      .union([
        z.lazy(() => ProductRatingRelationFilterObjectSchema),
        z.lazy(() => ProductRatingWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const RatingAttachmentWhereInputObjectSchema = Schema;
