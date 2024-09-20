import { z } from 'zod';
import { MarketProductCreateInputObjectSchema } from './objects/MarketProductCreateInput.schema';
import { MarketProductUncheckedCreateInputObjectSchema } from './objects/MarketProductUncheckedCreateInput.schema';

export const MarketProductCreateOneSchema = z.object({
  data: z.union([
    MarketProductCreateInputObjectSchema,
    MarketProductUncheckedCreateInputObjectSchema,
  ]),
});
