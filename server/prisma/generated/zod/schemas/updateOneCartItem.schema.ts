import { z } from 'zod';
import { CartItemUpdateInputObjectSchema } from './objects/CartItemUpdateInput.schema';
import { CartItemUncheckedUpdateInputObjectSchema } from './objects/CartItemUncheckedUpdateInput.schema';
import { CartItemWhereUniqueInputObjectSchema } from './objects/CartItemWhereUniqueInput.schema';

export const CartItemUpdateOneSchema = z.object({
  data: z.union([
    CartItemUpdateInputObjectSchema,
    CartItemUncheckedUpdateInputObjectSchema,
  ]),
  where: CartItemWhereUniqueInputObjectSchema,
});
