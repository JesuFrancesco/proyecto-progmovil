import { z } from 'zod';
import { MarketWhereUniqueInputObjectSchema } from './objects/MarketWhereUniqueInput.schema';
import { MarketCreateInputObjectSchema } from './objects/MarketCreateInput.schema';
import { MarketUncheckedCreateInputObjectSchema } from './objects/MarketUncheckedCreateInput.schema';
import { MarketUpdateInputObjectSchema } from './objects/MarketUpdateInput.schema';
import { MarketUncheckedUpdateInputObjectSchema } from './objects/MarketUncheckedUpdateInput.schema';

export const MarketUpsertSchema = z.object({
  where: MarketWhereUniqueInputObjectSchema,
  create: z.union([
    MarketCreateInputObjectSchema,
    MarketUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    MarketUpdateInputObjectSchema,
    MarketUncheckedUpdateInputObjectSchema,
  ]),
});
