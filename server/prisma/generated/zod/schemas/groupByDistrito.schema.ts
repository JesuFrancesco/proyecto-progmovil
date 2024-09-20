import { z } from 'zod';
import { DistritoWhereInputObjectSchema } from './objects/DistritoWhereInput.schema';
import { DistritoOrderByWithAggregationInputObjectSchema } from './objects/DistritoOrderByWithAggregationInput.schema';
import { DistritoScalarWhereWithAggregatesInputObjectSchema } from './objects/DistritoScalarWhereWithAggregatesInput.schema';
import { DistritoScalarFieldEnumSchema } from './enums/DistritoScalarFieldEnum.schema';

export const DistritoGroupBySchema = z.object({
  where: DistritoWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      DistritoOrderByWithAggregationInputObjectSchema,
      DistritoOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: DistritoScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(DistritoScalarFieldEnumSchema),
});
