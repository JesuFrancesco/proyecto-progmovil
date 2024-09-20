import { z } from 'zod';
import { WishlistCreateInputObjectSchema } from './objects/WishlistCreateInput.schema';
import { WishlistUncheckedCreateInputObjectSchema } from './objects/WishlistUncheckedCreateInput.schema';

export const WishlistCreateOneSchema = z.object({
  data: z.union([
    WishlistCreateInputObjectSchema,
    WishlistUncheckedCreateInputObjectSchema,
  ]),
});
