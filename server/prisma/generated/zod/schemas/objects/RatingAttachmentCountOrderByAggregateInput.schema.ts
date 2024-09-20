import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RatingAttachmentCountOrderByAggregateInput> = z
  .object({
    blobUrl: z.lazy(() => SortOrderSchema).optional(),
    filename: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    ratingId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const RatingAttachmentCountOrderByAggregateInputObjectSchema = Schema;
