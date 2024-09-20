import { z } from 'zod';
import { WishlistUpdateManyMutationInputObjectSchema } from './objects/WishlistUpdateManyMutationInput.schema';
import { WishlistWhereInputObjectSchema } from './objects/WishlistWhereInput.schema';

export const WishlistUpdateManySchema = z.object({
  data: WishlistUpdateManyMutationInputObjectSchema,
  where: WishlistWhereInputObjectSchema.optional(),
});
