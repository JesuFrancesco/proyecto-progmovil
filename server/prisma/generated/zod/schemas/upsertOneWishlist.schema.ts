import { z } from 'zod';
import { WishlistWhereUniqueInputObjectSchema } from './objects/WishlistWhereUniqueInput.schema';
import { WishlistCreateInputObjectSchema } from './objects/WishlistCreateInput.schema';
import { WishlistUncheckedCreateInputObjectSchema } from './objects/WishlistUncheckedCreateInput.schema';
import { WishlistUpdateInputObjectSchema } from './objects/WishlistUpdateInput.schema';
import { WishlistUncheckedUpdateInputObjectSchema } from './objects/WishlistUncheckedUpdateInput.schema';

export const WishlistUpsertSchema = z.object({
  where: WishlistWhereUniqueInputObjectSchema,
  create: z.union([
    WishlistCreateInputObjectSchema,
    WishlistUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    WishlistUpdateInputObjectSchema,
    WishlistUncheckedUpdateInputObjectSchema,
  ]),
});
