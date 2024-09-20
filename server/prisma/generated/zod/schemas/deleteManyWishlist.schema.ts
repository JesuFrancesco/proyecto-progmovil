import { z } from 'zod';
import { WishlistWhereInputObjectSchema } from './objects/WishlistWhereInput.schema';

export const WishlistDeleteManySchema = z.object({
  where: WishlistWhereInputObjectSchema.optional(),
});
