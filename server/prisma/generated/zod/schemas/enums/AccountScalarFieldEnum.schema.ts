import { z } from 'zod';

export const AccountScalarFieldEnumSchema = z.enum([
  'id',
  'email',
  'role',
  'password',
  'phone',
  'name',
]);
