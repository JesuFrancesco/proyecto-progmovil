import { z } from 'zod';
import { MarketProductWhereInputObjectSchema } from './objects/MarketProductWhereInput.schema';

export const MarketProductDeleteManySchema = z.object({
  where: MarketProductWhereInputObjectSchema.optional(),
});
