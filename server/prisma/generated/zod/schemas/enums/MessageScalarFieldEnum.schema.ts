import { z } from 'zod';

export const MessageScalarFieldEnumSchema = z.enum([
  'id',
  'text',
  'createdAt',
  'updatedAt',
  'status',
  'accountId',
]);
