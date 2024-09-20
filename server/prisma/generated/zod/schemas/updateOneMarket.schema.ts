import { z } from 'zod';
import { MarketUpdateInputObjectSchema } from './objects/MarketUpdateInput.schema';
import { MarketUncheckedUpdateInputObjectSchema } from './objects/MarketUncheckedUpdateInput.schema';
import { MarketWhereUniqueInputObjectSchema } from './objects/MarketWhereUniqueInput.schema';

export const MarketUpdateOneSchema = z.object({
  data: z.union([
    MarketUpdateInputObjectSchema,
    MarketUncheckedUpdateInputObjectSchema,
  ]),
  where: MarketWhereUniqueInputObjectSchema,
});
