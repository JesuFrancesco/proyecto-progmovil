import { z } from 'zod';
import { DepartmentoWhereInputObjectSchema } from './objects/DepartmentoWhereInput.schema';
import { DepartmentoOrderByWithAggregationInputObjectSchema } from './objects/DepartmentoOrderByWithAggregationInput.schema';
import { DepartmentoScalarWhereWithAggregatesInputObjectSchema } from './objects/DepartmentoScalarWhereWithAggregatesInput.schema';
import { DepartmentoScalarFieldEnumSchema } from './enums/DepartmentoScalarFieldEnum.schema';

export const DepartmentoGroupBySchema = z.object({
  where: DepartmentoWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      DepartmentoOrderByWithAggregationInputObjectSchema,
      DepartmentoOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: DepartmentoScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(DepartmentoScalarFieldEnumSchema),
});
