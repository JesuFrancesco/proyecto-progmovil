import { z } from 'zod';
import { DepartmentoWhereInputObjectSchema } from './objects/DepartmentoWhereInput.schema';

export const DepartmentoDeleteManySchema = z.object({
  where: DepartmentoWhereInputObjectSchema.optional(),
});
