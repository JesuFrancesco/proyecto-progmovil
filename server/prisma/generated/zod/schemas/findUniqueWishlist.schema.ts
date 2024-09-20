import { z } from 'zod';
import { WishlistWhereUniqueInputObjectSchema } from './objects/WishlistWhereUniqueInput.schema';

export const WishlistFindUniqueSchema = z.object({
  where: WishlistWhereUniqueInputObjectSchema,
});
