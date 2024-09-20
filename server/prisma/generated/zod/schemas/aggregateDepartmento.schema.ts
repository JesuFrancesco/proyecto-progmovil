import { z } from 'zod';
import { DepartmentoOrderByWithRelationInputObjectSchema } from './objects/DepartmentoOrderByWithRelationInput.schema';
import { DepartmentoWhereInputObjectSchema } from './objects/DepartmentoWhereInput.schema';
import { DepartmentoWhereUniqueInputObjectSchema } from './objects/DepartmentoWhereUniqueInput.schema';
import { DepartmentoCountAggregateInputObjectSchema } from './objects/DepartmentoCountAggregateInput.schema';
import { DepartmentoMinAggregateInputObjectSchema } from './objects/DepartmentoMinAggregateInput.schema';
import { DepartmentoMaxAggregateInputObjectSchema } from './objects/DepartmentoMaxAggregateInput.schema';
import { DepartmentoAvgAggregateInputObjectSchema } from './objects/DepartmentoAvgAggregateInput.schema';
import { DepartmentoSumAggregateInputObjectSchema } from './objects/DepartmentoSumAggregateInput.schema';

export const DepartmentoAggregateSchema = z.object({
  orderBy: z
    .union([
      DepartmentoOrderByWithRelationInputObjectSchema,
      DepartmentoOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: DepartmentoWhereInputObjectSchema.optional(),
  cursor: DepartmentoWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), DepartmentoCountAggregateInputObjectSchema])
    .optional(),
  _min: DepartmentoMinAggregateInputObjectSchema.optional(),
  _max: DepartmentoMaxAggregateInputObjectSchema.optional(),
  _avg: DepartmentoAvgAggregateInputObjectSchema.optional(),
  _sum: DepartmentoSumAggregateInputObjectSchema.optional(),
});
