import { z } from 'zod';
import { WishlistWhereUniqueInputObjectSchema } from './objects/WishlistWhereUniqueInput.schema';

export const WishlistDeleteOneSchema = z.object({
  where: WishlistWhereUniqueInputObjectSchema,
});
