import { z } from 'zod';
import { CartItemOrderByWithRelationInputObjectSchema } from './objects/CartItemOrderByWithRelationInput.schema';
import { CartItemWhereInputObjectSchema } from './objects/CartItemWhereInput.schema';
import { CartItemWhereUniqueInputObjectSchema } from './objects/CartItemWhereUniqueInput.schema';
import { CartItemScalarFieldEnumSchema } from './enums/CartItemScalarFieldEnum.schema';

export const CartItemFindManySchema = z.object({
  orderBy: z
    .union([
      CartItemOrderByWithRelationInputObjectSchema,
      CartItemOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: CartItemWhereInputObjectSchema.optional(),
  cursor: CartItemWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(CartItemScalarFieldEnumSchema).optional(),
});
