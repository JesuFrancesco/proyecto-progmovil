import { z } from 'zod';
import { CartItemWhereUniqueInputObjectSchema } from './objects/CartItemWhereUniqueInput.schema';

export const CartItemFindUniqueSchema = z.object({
  where: CartItemWhereUniqueInputObjectSchema,
});
