import { z } from 'zod';
import { ShoppingCartUpdateInputObjectSchema } from './objects/ShoppingCartUpdateInput.schema';
import { ShoppingCartUncheckedUpdateInputObjectSchema } from './objects/ShoppingCartUncheckedUpdateInput.schema';
import { ShoppingCartWhereUniqueInputObjectSchema } from './objects/ShoppingCartWhereUniqueInput.schema';

export const ShoppingCartUpdateOneSchema = z.object({
  data: z.union([
    ShoppingCartUpdateInputObjectSchema,
    ShoppingCartUncheckedUpdateInputObjectSchema,
  ]),
  where: ShoppingCartWhereUniqueInputObjectSchema,
});
