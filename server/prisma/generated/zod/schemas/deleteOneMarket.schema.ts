import { z } from 'zod';
import { MarketWhereUniqueInputObjectSchema } from './objects/MarketWhereUniqueInput.schema';

export const MarketDeleteOneSchema = z.object({
  where: MarketWhereUniqueInputObjectSchema,
});
