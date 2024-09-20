import { z } from 'zod';
import { MarketWhereInputObjectSchema } from './objects/MarketWhereInput.schema';

export const MarketDeleteManySchema = z.object({
  where: MarketWhereInputObjectSchema.optional(),
});
