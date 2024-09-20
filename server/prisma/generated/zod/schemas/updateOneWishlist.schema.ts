import { z } from 'zod';
import { WishlistUpdateInputObjectSchema } from './objects/WishlistUpdateInput.schema';
import { WishlistUncheckedUpdateInputObjectSchema } from './objects/WishlistUncheckedUpdateInput.schema';
import { WishlistWhereUniqueInputObjectSchema } from './objects/WishlistWhereUniqueInput.schema';

export const WishlistUpdateOneSchema = z.object({
  data: z.union([
    WishlistUpdateInputObjectSchema,
    WishlistUncheckedUpdateInputObjectSchema,
  ]),
  where: WishlistWhereUniqueInputObjectSchema,
});
