import { z } from 'zod';
import { MarketProductUpdateManyMutationInputObjectSchema } from './objects/MarketProductUpdateManyMutationInput.schema';
import { MarketProductWhereInputObjectSchema } from './objects/MarketProductWhereInput.schema';

export const MarketProductUpdateManySchema = z.object({
  data: MarketProductUpdateManyMutationInputObjectSchema,
  where: MarketProductWhereInputObjectSchema.optional(),
});
