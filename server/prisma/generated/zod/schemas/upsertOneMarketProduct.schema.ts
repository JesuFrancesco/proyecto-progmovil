import { z } from 'zod';
import { MarketProductWhereUniqueInputObjectSchema } from './objects/MarketProductWhereUniqueInput.schema';
import { MarketProductCreateInputObjectSchema } from './objects/MarketProductCreateInput.schema';
import { MarketProductUncheckedCreateInputObjectSchema } from './objects/MarketProductUncheckedCreateInput.schema';
import { MarketProductUpdateInputObjectSchema } from './objects/MarketProductUpdateInput.schema';
import { MarketProductUncheckedUpdateInputObjectSchema } from './objects/MarketProductUncheckedUpdateInput.schema';

export const MarketProductUpsertSchema = z.object({
  where: MarketProductWhereUniqueInputObjectSchema,
  create: z.union([
    MarketProductCreateInputObjectSchema,
    MarketProductUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    MarketProductUpdateInputObjectSchema,
    MarketProductUncheckedUpdateInputObjectSchema,
  ]),
});
