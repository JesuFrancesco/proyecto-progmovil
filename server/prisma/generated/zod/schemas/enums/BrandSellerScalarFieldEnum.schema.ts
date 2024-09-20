import { z } from 'zod';

export const BrandSellerScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'countryOrigin',
  'referenceLocation',
  'countryId',
]);
