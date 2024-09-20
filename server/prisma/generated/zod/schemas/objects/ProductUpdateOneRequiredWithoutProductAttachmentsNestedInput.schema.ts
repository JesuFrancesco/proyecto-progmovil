import { z } from 'zod';
import { ProductCreateWithoutProductAttachmentsInputObjectSchema } from './ProductCreateWithoutProductAttachmentsInput.schema';
import { ProductUncheckedCreateWithoutProductAttachmentsInputObjectSchema } from './ProductUncheckedCreateWithoutProductAttachmentsInput.schema';
import { ProductCreateOrConnectWithoutProductAttachmentsInputObjectSchema } from './ProductCreateOrConnectWithoutProductAttachmentsInput.schema';
import { ProductUpsertWithoutProductAttachmentsInputObjectSchema } from './ProductUpsertWithoutProductAttachmentsInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithoutProductAttachmentsInputObjectSchema } from './ProductUpdateWithoutProductAttachmentsInput.schema';
import { ProductUncheckedUpdateWithoutProductAttachmentsInputObjectSchema } from './ProductUncheckedUpdateWithoutProductAttachmentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpdateOneRequiredWithoutProductAttachmentsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProductCreateWithoutProductAttachmentsInputObjectSchema),
          z.lazy(
            () =>
              ProductUncheckedCreateWithoutProductAttachmentsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            ProductCreateOrConnectWithoutProductAttachmentsInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => ProductUpsertWithoutProductAttachmentsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ProductUpdateWithoutProductAttachmentsInputObjectSchema),
          z.lazy(
            () =>
              ProductUncheckedUpdateWithoutProductAttachmentsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const ProductUpdateOneRequiredWithoutProductAttachmentsNestedInputObjectSchema =
  Schema;
