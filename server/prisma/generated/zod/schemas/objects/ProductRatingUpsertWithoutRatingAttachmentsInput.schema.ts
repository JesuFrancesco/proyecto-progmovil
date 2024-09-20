import { z } from 'zod';
import { ProductRatingUpdateWithoutRatingAttachmentsInputObjectSchema } from './ProductRatingUpdateWithoutRatingAttachmentsInput.schema';
import { ProductRatingUncheckedUpdateWithoutRatingAttachmentsInputObjectSchema } from './ProductRatingUncheckedUpdateWithoutRatingAttachmentsInput.schema';
import { ProductRatingCreateWithoutRatingAttachmentsInputObjectSchema } from './ProductRatingCreateWithoutRatingAttachmentsInput.schema';
import { ProductRatingUncheckedCreateWithoutRatingAttachmentsInputObjectSchema } from './ProductRatingUncheckedCreateWithoutRatingAttachmentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductRatingUpsertWithoutRatingAttachmentsInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () => ProductRatingUpdateWithoutRatingAttachmentsInputObjectSchema,
        ),
        z.lazy(
          () =>
            ProductRatingUncheckedUpdateWithoutRatingAttachmentsInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () => ProductRatingCreateWithoutRatingAttachmentsInputObjectSchema,
        ),
        z.lazy(
          () =>
            ProductRatingUncheckedCreateWithoutRatingAttachmentsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProductRatingUpsertWithoutRatingAttachmentsInputObjectSchema =
  Schema;
