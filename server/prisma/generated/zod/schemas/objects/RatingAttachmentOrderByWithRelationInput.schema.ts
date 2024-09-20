import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProductRatingOrderByWithRelationInputObjectSchema } from './ProductRatingOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RatingAttachmentOrderByWithRelationInput> = z
  .object({
    blobUrl: z.lazy(() => SortOrderSchema).optional(),
    filename: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    ratingId: z.lazy(() => SortOrderSchema).optional(),
    productRating: z
      .lazy(() => ProductRatingOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const RatingAttachmentOrderByWithRelationInputObjectSchema = Schema;
