import { z } from 'zod';
import { MarketUpdateManyMutationInputObjectSchema } from './objects/MarketUpdateManyMutationInput.schema';
import { MarketWhereInputObjectSchema } from './objects/MarketWhereInput.schema';

export const MarketUpdateManySchema = z.object({
  data: MarketUpdateManyMutationInputObjectSchema,
  where: MarketWhereInputObjectSchema.optional(),
});
