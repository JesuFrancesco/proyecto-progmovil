import { z } from 'zod';

export const MarketScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'contactEmail',
  'contactPhone',
  'accountId',
]);
