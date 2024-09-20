import { z } from 'zod';
import { ProductUpdateWithoutCartItemsInputObjectSchema } from './ProductUpdateWithoutCartItemsInput.schema';
import { ProductUncheckedUpdateWithoutCartItemsInputObjectSchema } from './ProductUncheckedUpdateWithoutCartItemsInput.schema';
import { ProductCreateWithoutCartItemsInputObjectSchema } from './ProductCreateWithoutCartItemsInput.schema';
import { ProductUncheckedCreateWithoutCartItemsInputObjectSchema } from './ProductUncheckedCreateWithoutCartItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpsertWithoutCartItemsInput> = z
  .object({
    update: z.union([
      z.lazy(() => ProductUpdateWithoutCartItemsInputObjectSchema),
      z.lazy(() => ProductUncheckedUpdateWithoutCartItemsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ProductCreateWithoutCartItemsInputObjectSchema),
      z.lazy(() => ProductUncheckedCreateWithoutCartItemsInputObjectSchema),
    ]),
  })
  .strict();

export const ProductUpsertWithoutCartItemsInputObjectSchema = Schema;
