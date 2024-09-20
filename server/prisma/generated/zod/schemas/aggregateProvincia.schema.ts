import { z } from 'zod';
import { ProvinciaOrderByWithRelationInputObjectSchema } from './objects/ProvinciaOrderByWithRelationInput.schema';
import { ProvinciaWhereInputObjectSchema } from './objects/ProvinciaWhereInput.schema';
import { ProvinciaWhereUniqueInputObjectSchema } from './objects/ProvinciaWhereUniqueInput.schema';
import { ProvinciaCountAggregateInputObjectSchema } from './objects/ProvinciaCountAggregateInput.schema';
import { ProvinciaMinAggregateInputObjectSchema } from './objects/ProvinciaMinAggregateInput.schema';
import { ProvinciaMaxAggregateInputObjectSchema } from './objects/ProvinciaMaxAggregateInput.schema';
import { ProvinciaAvgAggregateInputObjectSchema } from './objects/ProvinciaAvgAggregateInput.schema';
import { ProvinciaSumAggregateInputObjectSchema } from './objects/ProvinciaSumAggregateInput.schema';

export const ProvinciaAggregateSchema = z.object({
  orderBy: z
    .union([
      ProvinciaOrderByWithRelationInputObjectSchema,
      ProvinciaOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ProvinciaWhereInputObjectSchema.optional(),
  cursor: ProvinciaWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ProvinciaCountAggregateInputObjectSchema])
    .optional(),
  _min: ProvinciaMinAggregateInputObjectSchema.optional(),
  _max: ProvinciaMaxAggregateInputObjectSchema.optional(),
  _avg: ProvinciaAvgAggregateInputObjectSchema.optional(),
  _sum: ProvinciaSumAggregateInputObjectSchema.optional(),
});
