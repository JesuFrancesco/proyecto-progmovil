import { z } from 'zod';

export const ProductScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'stock',
  'price',
  'dimensions',
  'warranty',
  'discount',
  'peso',
  'formato',
  'anhoEdicion',
  'numeroPaginas',
  'sellerId',
]);
