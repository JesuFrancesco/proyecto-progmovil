import { z } from 'zod';
import { ProductUpdateWithoutProductAttachmentsInputObjectSchema } from './ProductUpdateWithoutProductAttachmentsInput.schema';
import { ProductUncheckedUpdateWithoutProductAttachmentsInputObjectSchema } from './ProductUncheckedUpdateWithoutProductAttachmentsInput.schema';
import { ProductCreateWithoutProductAttachmentsInputObjectSchema } from './ProductCreateWithoutProductAttachmentsInput.schema';
import { ProductUncheckedCreateWithoutProductAttachmentsInputObjectSchema } from './ProductUncheckedCreateWithoutProductAttachmentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpsertWithoutProductAttachmentsInput> = z
  .object({
    update: z.union([
      z.lazy(() => ProductUpdateWithoutProductAttachmentsInputObjectSchema),
      z.lazy(
        () => ProductUncheckedUpdateWithoutProductAttachmentsInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => ProductCreateWithoutProductAttachmentsInputObjectSchema),
      z.lazy(
        () => ProductUncheckedCreateWithoutProductAttachmentsInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const ProductUpsertWithoutProductAttachmentsInputObjectSchema = Schema;
