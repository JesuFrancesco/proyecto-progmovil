import { z } from 'zod';
import { ProductRatingCreateWithoutRatingAttachmentsInputObjectSchema } from './ProductRatingCreateWithoutRatingAttachmentsInput.schema';
import { ProductRatingUncheckedCreateWithoutRatingAttachmentsInputObjectSchema } from './ProductRatingUncheckedCreateWithoutRatingAttachmentsInput.schema';
import { ProductRatingCreateOrConnectWithoutRatingAttachmentsInputObjectSchema } from './ProductRatingCreateOrConnectWithoutRatingAttachmentsInput.schema';
import { ProductRatingUpsertWithoutRatingAttachmentsInputObjectSchema } from './ProductRatingUpsertWithoutRatingAttachmentsInput.schema';
import { ProductRatingWhereUniqueInputObjectSchema } from './ProductRatingWhereUniqueInput.schema';
import { ProductRatingUpdateWithoutRatingAttachmentsInputObjectSchema } from './ProductRatingUpdateWithoutRatingAttachmentsInput.schema';
import { ProductRatingUncheckedUpdateWithoutRatingAttachmentsInputObjectSchema } from './ProductRatingUncheckedUpdateWithoutRatingAttachmentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductRatingUpdateOneRequiredWithoutRatingAttachmentsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => ProductRatingCreateWithoutRatingAttachmentsInputObjectSchema,
          ),
          z.lazy(
            () =>
              ProductRatingUncheckedCreateWithoutRatingAttachmentsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            ProductRatingCreateOrConnectWithoutRatingAttachmentsInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(
          () => ProductRatingUpsertWithoutRatingAttachmentsInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => ProductRatingWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(
            () => ProductRatingUpdateWithoutRatingAttachmentsInputObjectSchema,
          ),
          z.lazy(
            () =>
              ProductRatingUncheckedUpdateWithoutRatingAttachmentsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const ProductRatingUpdateOneRequiredWithoutRatingAttachmentsNestedInputObjectSchema =
  Schema;
