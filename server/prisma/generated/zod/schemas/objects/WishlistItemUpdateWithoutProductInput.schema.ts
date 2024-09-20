import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { WishlistUpdateOneRequiredWithoutWishlistItemsNestedInputObjectSchema } from './WishlistUpdateOneRequiredWithoutWishlistItemsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WishlistItemUpdateWithoutProductInput> = z
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
  })
  .strict();

export const WishlistItemUpdateWithoutProductInputObjectSchema = Schema;
