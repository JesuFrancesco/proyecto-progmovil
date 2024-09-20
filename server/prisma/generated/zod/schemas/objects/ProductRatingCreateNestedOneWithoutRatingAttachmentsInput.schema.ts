import { z } from 'zod';
import { ProductRatingCreateWithoutRatingAttachmentsInputObjectSchema } from './ProductRatingCreateWithoutRatingAttachmentsInput.schema';
import { ProductRatingUncheckedCreateWithoutRatingAttachmentsInputObjectSchema } from './ProductRatingUncheckedCreateWithoutRatingAttachmentsInput.schema';
import { ProductRatingCreateOrConnectWithoutRatingAttachmentsInputObjectSchema } from './ProductRatingCreateOrConnectWithoutRatingAttachmentsInput.schema';
import { ProductRatingWhereUniqueInputObjectSchema } from './ProductRatingWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductRatingCreateNestedOneWithoutRatingAttachmentsInput> =
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
      connect: z
        .lazy(() => ProductRatingWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const ProductRatingCreateNestedOneWithoutRatingAttachmentsInputObjectSchema =
  Schema;
