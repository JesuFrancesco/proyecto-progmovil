import { z } from 'zod';
import { DistritoOrderByWithRelationInputObjectSchema } from './objects/DistritoOrderByWithRelationInput.schema';
import { DistritoWhereInputObjectSchema } from './objects/DistritoWhereInput.schema';
import { DistritoWhereUniqueInputObjectSchema } from './objects/DistritoWhereUniqueInput.schema';
import { DistritoScalarFieldEnumSchema } from './enums/DistritoScalarFieldEnum.schema';

export const DistritoFindManySchema = z.object({
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
  distinct: z.array(DistritoScalarFieldEnumSchema).optional(),
});
