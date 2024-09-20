import { z } from 'zod';
import { CartItemWhereUniqueInputObjectSchema } from './objects/CartItemWhereUniqueInput.schema';

export const CartItemDeleteOneSchema = z.object({
  where: CartItemWhereUniqueInputObjectSchema,
});
