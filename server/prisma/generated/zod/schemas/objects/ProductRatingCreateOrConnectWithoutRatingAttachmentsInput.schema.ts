import { z } from 'zod';
import { ProductRatingWhereUniqueInputObjectSchema } from './ProductRatingWhereUniqueInput.schema';
import { ProductRatingCreateWithoutRatingAttachmentsInputObjectSchema } from './ProductRatingCreateWithoutRatingAttachmentsInput.schema';
import { ProductRatingUncheckedCreateWithoutRatingAttachmentsInputObjectSchema } from './ProductRatingUncheckedCreateWithoutRatingAttachmentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductRatingCreateOrConnectWithoutRatingAttachmentsInput> =
  z
    .object({
      where: z.lazy(() => ProductRatingWhereUniqueInputObjectSchema),
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

export const ProductRatingCreateOrConnectWithoutRatingAttachmentsInputObjectSchema =
  Schema;
