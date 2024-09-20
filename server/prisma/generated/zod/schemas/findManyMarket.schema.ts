import { z } from 'zod';
import { MarketOrderByWithRelationInputObjectSchema } from './objects/MarketOrderByWithRelationInput.schema';
import { MarketWhereInputObjectSchema } from './objects/MarketWhereInput.schema';
import { MarketWhereUniqueInputObjectSchema } from './objects/MarketWhereUniqueInput.schema';
import { MarketScalarFieldEnumSchema } from './enums/MarketScalarFieldEnum.schema';

export const MarketFindManySchema = z.object({
  orderBy: z
    .union([
      MarketOrderByWithRelationInputObjectSchema,
      MarketOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: MarketWhereInputObjectSchema.optional(),
  cursor: MarketWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(MarketScalarFieldEnumSchema).optional(),
});
