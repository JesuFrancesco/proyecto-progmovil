import { z } from 'zod';
import { MarketCreateInputObjectSchema } from './objects/MarketCreateInput.schema';
import { MarketUncheckedCreateInputObjectSchema } from './objects/MarketUncheckedCreateInput.schema';

export const MarketCreateOneSchema = z.object({
  data: z.union([
    MarketCreateInputObjectSchema,
    MarketUncheckedCreateInputObjectSchema,
  ]),
});
