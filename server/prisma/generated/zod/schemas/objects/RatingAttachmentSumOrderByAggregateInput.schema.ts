import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RatingAttachmentSumOrderByAggregateInput> = z
  .object({
    ratingId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const RatingAttachmentSumOrderByAggregateInputObjectSchema = Schema;
