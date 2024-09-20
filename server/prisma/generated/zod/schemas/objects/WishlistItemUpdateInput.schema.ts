import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { WishlistUpdateOneRequiredWithoutWishlistItemsNestedInputObjectSchema } from './WishlistUpdateOneRequiredWithoutWishlistItemsNestedInput.schema';
import { ProductUpdateOneRequiredWithoutWishlistItemsNestedInputObjectSchema } from './ProductUpdateOneRequiredWithoutWishlistItemsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WishlistItemUpdateInput> = z
  .object({
    addedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    wishlist: z
      .lazy(
        () =>
          WishlistUpdateOneRequiredWithoutWishlistItemsNestedInputObjectSchema,
      )
      .optional(),
    product: z
      .lazy(
        () =>
          ProductUpdateOneRequiredWithoutWishlistItemsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const WishlistItemUpdateInputObjectSchema = Schema;
