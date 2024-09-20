import { z } from 'zod';

export const OrderScalarFieldEnumSchema = z.enum([
  'id',
  'totalPrice',
  'status',
  'userId',
]);
