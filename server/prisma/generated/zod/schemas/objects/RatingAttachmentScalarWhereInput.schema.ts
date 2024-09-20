import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RatingAttachmentScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => RatingAttachmentScalarWhereInputObjectSchema),
        z.lazy(() => RatingAttachmentScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RatingAttachmentScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RatingAttachmentScalarWhereInputObjectSchema),
        z.lazy(() => RatingAttachmentScalarWhereInputObjectSchema).array(),
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
  })
  .strict();

export const RatingAttachmentScalarWhereInputObjectSchema = Schema;
