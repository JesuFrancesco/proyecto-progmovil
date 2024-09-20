import { z } from 'zod';
import { ProvinciaWhereInputObjectSchema } from './objects/ProvinciaWhereInput.schema';
import { ProvinciaOrderByWithAggregationInputObjectSchema } from './objects/ProvinciaOrderByWithAggregationInput.schema';
import { ProvinciaScalarWhereWithAggregatesInputObjectSchema } from './objects/ProvinciaScalarWhereWithAggregatesInput.schema';
import { ProvinciaScalarFieldEnumSchema } from './enums/ProvinciaScalarFieldEnum.schema';

export const ProvinciaGroupBySchema = z.object({
  where: ProvinciaWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ProvinciaOrderByWithAggregationInputObjectSchema,
      ProvinciaOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ProvinciaScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ProvinciaScalarFieldEnumSchema),
});
