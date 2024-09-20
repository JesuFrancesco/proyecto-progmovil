import { z } from 'zod';

export const ProductRatingScalarFieldEnumSchema = z.enum([
  'id',
  'score',
  'text',
  'createdAt',
  'userId',
  'productId',
]);
