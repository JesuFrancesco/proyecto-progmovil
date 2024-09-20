import { z } from 'zod';
import { MarketProductWhereUniqueInputObjectSchema } from './objects/MarketProductWhereUniqueInput.schema';

export const MarketProductDeleteOneSchema = z.object({
  where: MarketProductWhereUniqueInputObjectSchema,
});
