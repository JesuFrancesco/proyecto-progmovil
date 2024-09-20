import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { WishlistItemUncheckedUpdateManyWithoutWishlistNestedInputObjectSchema } from './WishlistItemUncheckedUpdateManyWithoutWishlistNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WishlistUncheckedUpdateWithoutUserInput> = z
  .object({
    id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    wishlistItems: z
      .lazy(
        () =>
          WishlistItemUncheckedUpdateManyWithoutWishlistNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const WishlistUncheckedUpdateWithoutUserInputObjectSchema = Schema;
