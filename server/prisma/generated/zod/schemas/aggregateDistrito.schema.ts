import { z } from 'zod';
import { DistritoOrderByWithRelationInputObjectSchema } from './objects/DistritoOrderByWithRelationInput.schema';
import { DistritoWhereInputObjectSchema } from './objects/DistritoWhereInput.schema';
import { DistritoWhereUniqueInputObjectSchema } from './objects/DistritoWhereUniqueInput.schema';
import { DistritoCountAggregateInputObjectSchema } from './objects/DistritoCountAggregateInput.schema';
import { DistritoMinAggregateInputObjectSchema } from './objects/DistritoMinAggregateInput.schema';
import { DistritoMaxAggregateInputObjectSchema } from './objects/DistritoMaxAggregateInput.schema';
import { DistritoAvgAggregateInputObjectSchema } from './objects/DistritoAvgAggregateInput.schema';
import { DistritoSumAggregateInputObjectSchema } from './objects/DistritoSumAggregateInput.schema';

export const DistritoAggregateSchema = z.object({
  orderBy: z
    .union([
      DistritoOrderByWithRelationInputObjectSchema,
      DistritoOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: DistritoWhereInputObjectSchema.optional(),
  cursor: DistritoWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), DistritoCountAggregateInputObjectSchema])
    .optional(),
  _min: DistritoMinAggregateInputObjectSchema.optional(),
  _max: DistritoMaxAggregateInputObjectSchema.optional(),
  _avg: DistritoAvgAggregateInputObjectSchema.optional(),
  _sum: DistritoSumAggregateInputObjectSchema.optional(),
});
