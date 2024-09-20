import { z } from 'zod';
import { ShoppingCartWhereInputObjectSchema } from './objects/ShoppingCartWhereInput.schema';

export const ShoppingCartDeleteManySchema = z.object({
  where: ShoppingCartWhereInputObjectSchema.optional(),
});
