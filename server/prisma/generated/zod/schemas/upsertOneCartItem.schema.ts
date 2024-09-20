import { z } from 'zod';
import { CartItemWhereUniqueInputObjectSchema } from './objects/CartItemWhereUniqueInput.schema';
import { CartItemCreateInputObjectSchema } from './objects/CartItemCreateInput.schema';
import { CartItemUncheckedCreateInputObjectSchema } from './objects/CartItemUncheckedCreateInput.schema';
import { CartItemUpdateInputObjectSchema } from './objects/CartItemUpdateInput.schema';
import { CartItemUncheckedUpdateInputObjectSchema } from './objects/CartItemUncheckedUpdateInput.schema';

export const CartItemUpsertSchema = z.object({
  where: CartItemWhereUniqueInputObjectSchema,
  create: z.union([
    CartItemCreateInputObjectSchema,
    CartItemUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    CartItemUpdateInputObjectSchema,
    CartItemUncheckedUpdateInputObjectSchema,
  ]),
});
