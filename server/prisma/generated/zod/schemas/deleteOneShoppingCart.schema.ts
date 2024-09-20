import { z } from 'zod';
import { ShoppingCartWhereUniqueInputObjectSchema } from './objects/ShoppingCartWhereUniqueInput.schema';

export const ShoppingCartDeleteOneSchema = z.object({
  where: ShoppingCartWhereUniqueInputObjectSchema,
});
