import { z } from 'zod';
import { MarketProductUpdateInputObjectSchema } from './objects/MarketProductUpdateInput.schema';
import { MarketProductUncheckedUpdateInputObjectSchema } from './objects/MarketProductUncheckedUpdateInput.schema';
import { MarketProductWhereUniqueInputObjectSchema } from './objects/MarketProductWhereUniqueInput.schema';

export const MarketProductUpdateOneSchema = z.object({
  data: z.union([
    MarketProductUpdateInputObjectSchema,
    MarketProductUncheckedUpdateInputObjectSchema,
  ]),
  where: MarketProductWhereUniqueInputObjectSchema,
});
