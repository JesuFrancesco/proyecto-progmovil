import { z } from 'zod';

export const ProductQuestionScalarFieldEnumSchema = z.enum([
  'id',
  'text',
  'createdAt',
  'productId',
  'userId',
]);
