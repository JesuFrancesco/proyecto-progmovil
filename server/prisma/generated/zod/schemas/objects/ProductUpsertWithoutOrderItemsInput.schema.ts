import { z } from 'zod';
import { ProductUpdateWithoutOrderItemsInputObjectSchema } from './ProductUpdateWithoutOrderItemsInput.schema';
import { ProductUncheckedUpdateWithoutOrderItemsInputObjectSchema } from './ProductUncheckedUpdateWithoutOrderItemsInput.schema';
import { ProductCreateWithoutOrderItemsInputObjectSchema } from './ProductCreateWithoutOrderItemsInput.schema';
import { ProductUncheckedCreateWithoutOrderItemsInputObjectSchema } from './ProductUncheckedCreateWithoutOrderItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpsertWithoutOrderItemsInput> = z
  .object({
    update: z.union([
      z.lazy(() => ProductUpdateWithoutOrderItemsInputObjectSchema),
      z.lazy(() => ProductUncheckedUpdateWithoutOrderItemsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ProductCreateWithoutOrderItemsInputObjectSchema),
      z.lazy(() => ProductUncheckedCreateWithoutOrderItemsInputObjectSchema),
    ]),
  })
  .strict();

export const ProductUpsertWithoutOrderItemsInputObjectSchema = Schema;
