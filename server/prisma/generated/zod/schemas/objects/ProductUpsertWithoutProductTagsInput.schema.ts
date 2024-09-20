import { z } from 'zod';
import { ProductUpdateWithoutProductTagsInputObjectSchema } from './ProductUpdateWithoutProductTagsInput.schema';
import { ProductUncheckedUpdateWithoutProductTagsInputObjectSchema } from './ProductUncheckedUpdateWithoutProductTagsInput.schema';
import { ProductCreateWithoutProductTagsInputObjectSchema } from './ProductCreateWithoutProductTagsInput.schema';
import { ProductUncheckedCreateWithoutProductTagsInputObjectSchema } from './ProductUncheckedCreateWithoutProductTagsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpsertWithoutProductTagsInput> = z
  .object({
    update: z.union([
      z.lazy(() => ProductUpdateWithoutProductTagsInputObjectSchema),
      z.lazy(() => ProductUncheckedUpdateWithoutProductTagsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ProductCreateWithoutProductTagsInputObjectSchema),
      z.lazy(() => ProductUncheckedCreateWithoutProductTagsInputObjectSchema),
    ]),
  })
  .strict();

export const ProductUpsertWithoutProductTagsInputObjectSchema = Schema;
