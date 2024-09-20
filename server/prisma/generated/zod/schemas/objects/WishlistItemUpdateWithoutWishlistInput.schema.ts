import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ProductUpdateOneRequiredWithoutWishlistItemsNestedInputObjectSchema } from './ProductUpdateOneRequiredWithoutWishlistItemsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WishlistItemUpdateWithoutWishlistInput> = z
  .object({
    addedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    product: z
      .lazy(
        () =>
          ProductUpdateOneRequiredWithoutWishlistItemsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const WishlistItemUpdateWithoutWishlistInputObjectSchema = Schema;
