import { z } from 'zod';

export const CartItemScalarFieldEnumSchema = z.enum([
  'amount',
  'addedAt',
  'cartId',
  'productId',
]);
