import { z } from 'zod';
import { MarketProductWhereUniqueInputObjectSchema } from './objects/MarketProductWhereUniqueInput.schema';

export const MarketProductFindUniqueSchema = z.object({
  where: MarketProductWhereUniqueInputObjectSchema,
});
