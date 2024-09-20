import { z } from 'zod';
import { ShoppingCartWhereUniqueInputObjectSchema } from './objects/ShoppingCartWhereUniqueInput.schema';

export const ShoppingCartFindUniqueSchema = z.object({
  where: ShoppingCartWhereUniqueInputObjectSchema,
});
