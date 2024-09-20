import { z } from 'zod';
import { MarketProductOrderByWithRelationInputObjectSchema } from './objects/MarketProductOrderByWithRelationInput.schema';
import { MarketProductWhereInputObjectSchema } from './objects/MarketProductWhereInput.schema';
import { MarketProductWhereUniqueInputObjectSchema } from './objects/MarketProductWhereUniqueInput.schema';
import { MarketProductScalarFieldEnumSchema } from './enums/MarketProductScalarFieldEnum.schema';

export const MarketProductFindManySchema = z.object({
  orderBy: z
    .union([
      MarketProductOrderByWithRelationInputObjectSchema,
      MarketProductOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: MarketProductWhereInputObjectSchema.optional(),
  cursor: MarketProductWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(MarketProductScalarFieldEnumSchema).optional(),
});
