import { z } from 'zod';
import { DepartmentoUpdateManyMutationInputObjectSchema } from './objects/DepartmentoUpdateManyMutationInput.schema';
import { DepartmentoWhereInputObjectSchema } from './objects/DepartmentoWhereInput.schema';

export const DepartmentoUpdateManySchema = z.object({
  data: DepartmentoUpdateManyMutationInputObjectSchema,
  where: DepartmentoWhereInputObjectSchema.optional(),
});
