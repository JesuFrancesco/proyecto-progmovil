import { z } from 'zod';
import { ShoppingCartOrderByWithRelationInputObjectSchema } from './objects/ShoppingCartOrderByWithRelationInput.schema';
import { ShoppingCartWhereInputObjectSchema } from './objects/ShoppingCartWhereInput.schema';
import { ShoppingCartWhereUniqueInputObjectSchema } from './objects/ShoppingCartWhereUniqueInput.schema';
import { ShoppingCartScalarFieldEnumSchema } from './enums/ShoppingCartScalarFieldEnum.schema';

export const ShoppingCartFindManySchema = z.object({
  orderBy: z
    .union([
      ShoppingCartOrderByWithRelationInputObjectSchema,
      ShoppingCartOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ShoppingCartWhereInputObjectSchema.optional(),
  cursor: ShoppingCartWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ShoppingCartScalarFieldEnumSchema).optional(),
});
