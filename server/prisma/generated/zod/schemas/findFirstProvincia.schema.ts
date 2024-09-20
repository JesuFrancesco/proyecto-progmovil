import { z } from 'zod';
import { ProvinciaOrderByWithRelationInputObjectSchema } from './objects/ProvinciaOrderByWithRelationInput.schema';
import { ProvinciaWhereInputObjectSchema } from './objects/ProvinciaWhereInput.schema';
import { ProvinciaWhereUniqueInputObjectSchema } from './objects/ProvinciaWhereUniqueInput.schema';
import { ProvinciaScalarFieldEnumSchema } from './enums/ProvinciaScalarFieldEnum.schema';

export const ProvinciaFindFirstSchema = z.object({
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
  distinct: z.array(ProvinciaScalarFieldEnumSchema).optional(),
});
