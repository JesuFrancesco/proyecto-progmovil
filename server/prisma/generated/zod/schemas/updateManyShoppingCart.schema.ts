import { z } from 'zod';
import { ShoppingCartUpdateManyMutationInputObjectSchema } from './objects/ShoppingCartUpdateManyMutationInput.schema';
import { ShoppingCartWhereInputObjectSchema } from './objects/ShoppingCartWhereInput.schema';

export const ShoppingCartUpdateManySchema = z.object({
  data: ShoppingCartUpdateManyMutationInputObjectSchema,
  where: ShoppingCartWhereInputObjectSchema.optional(),
});
