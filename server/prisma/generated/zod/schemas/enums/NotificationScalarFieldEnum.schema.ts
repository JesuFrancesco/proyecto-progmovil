import { z } from 'zod';

export const NotificationScalarFieldEnumSchema = z.enum([
  'id',
  'title',
  'description',
  'createdAt',
  'updatedAt',
  'imageUrl',
]);
