import { z } from 'zod';

export const OrderItemScalarFieldEnumSchema = z.enum([
  'amount',
  'orderId',
  'productId',
]);
