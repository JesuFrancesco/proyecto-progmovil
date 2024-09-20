import { z } from 'zod';

export const DistritoScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'provinciaId',
]);
