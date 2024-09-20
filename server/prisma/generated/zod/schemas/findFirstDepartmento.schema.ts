import { z } from 'zod';
import { DepartmentoOrderByWithRelationInputObjectSchema } from './objects/DepartmentoOrderByWithRelationInput.schema';
import { DepartmentoWhereInputObjectSchema } from './objects/DepartmentoWhereInput.schema';
import { DepartmentoWhereUniqueInputObjectSchema } from './objects/DepartmentoWhereUniqueInput.schema';
import { DepartmentoScalarFieldEnumSchema } from './enums/DepartmentoScalarFieldEnum.schema';

export const DepartmentoFindFirstSchema = z.object({
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
  distinct: z.array(DepartmentoScalarFieldEnumSchema).optional(),
});
