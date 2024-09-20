import { z } from 'zod';
import { ShoppingCartCreateInputObjectSchema } from './objects/ShoppingCartCreateInput.schema';
import { ShoppingCartUncheckedCreateInputObjectSchema } from './objects/ShoppingCartUncheckedCreateInput.schema';

export const ShoppingCartCreateOneSchema = z.object({
  data: z.union([
    ShoppingCartCreateInputObjectSchema,
    ShoppingCartUncheckedCreateInputObjectSchema,
  ]),
});
