import { z } from 'zod';

export const ProvinciaScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'departmentoId',
]);
