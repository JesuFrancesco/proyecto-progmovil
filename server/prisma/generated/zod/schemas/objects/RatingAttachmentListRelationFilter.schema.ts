import { z } from 'zod';
import { RatingAttachmentWhereInputObjectSchema } from './RatingAttachmentWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RatingAttachmentListRelationFilter> = z
  .object({
    every: z.lazy(() => RatingAttachmentWhereInputObjectSchema).optional(),
    some: z.lazy(() => RatingAttachmentWhereInputObjectSchema).optional(),
    none: z.lazy(() => RatingAttachmentWhereInputObjectSchema).optional(),
  })
  .strict();

export const RatingAttachmentListRelationFilterObjectSchema = Schema;
