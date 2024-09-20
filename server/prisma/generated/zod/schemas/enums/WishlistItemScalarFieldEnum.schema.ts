import { z } from 'zod';

export const WishlistItemScalarFieldEnumSchema = z.enum([
  'addedAt',
  'wishlistId',
  'productId',
]);
