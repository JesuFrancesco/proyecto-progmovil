import { z } from 'zod';
import { ShoppingCartWhereUniqueInputObjectSchema } from './objects/ShoppingCartWhereUniqueInput.schema';
import { ShoppingCartCreateInputObjectSchema } from './objects/ShoppingCartCreateInput.schema';
import { ShoppingCartUncheckedCreateInputObjectSchema } from './objects/ShoppingCartUncheckedCreateInput.schema';
import { ShoppingCartUpdateInputObjectSchema } from './objects/ShoppingCartUpdateInput.schema';
import { ShoppingCartUncheckedUpdateInputObjectSchema } from './objects/ShoppingCartUncheckedUpdateInput.schema';

export const ShoppingCartUpsertSchema = z.object({
  where: ShoppingCartWhereUniqueInputObjectSchema,
  create: z.union([
    ShoppingCartCreateInputObjectSchema,
    ShoppingCartUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ShoppingCartUpdateInputObjectSchema,
    ShoppingCartUncheckedUpdateInputObjectSchema,
  ]),
});
