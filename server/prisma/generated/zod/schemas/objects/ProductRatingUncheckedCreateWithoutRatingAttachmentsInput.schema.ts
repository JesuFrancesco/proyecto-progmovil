import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductRatingUncheckedCreateWithoutRatingAttachmentsInput> =
  z
    .object({
      id: z.number().optional(),
      score: z.number(),
      text: z.string(),
      createdAt: z.coerce.date(),
      userId: z.number(),
      productId: z.number(),
    })
    .strict();

export const ProductRatingUncheckedCreateWithoutRatingAttachmentsInputObjectSchema =
  Schema;
