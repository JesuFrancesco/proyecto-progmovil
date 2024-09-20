import { z } from 'zod';
import { CartItemCreateInputObjectSchema } from './objects/CartItemCreateInput.schema';
import { CartItemUncheckedCreateInputObjectSchema } from './objects/CartItemUncheckedCreateInput.schema';

export const CartItemCreateOneSchema = z.object({
  data: z.union([
    CartItemCreateInputObjectSchema,
    CartItemUncheckedCreateInputObjectSchema,
  ]),
});
