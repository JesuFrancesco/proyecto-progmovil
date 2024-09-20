import { z } from 'zod';
import { ProvinciaWhereInputObjectSchema } from './objects/ProvinciaWhereInput.schema';

export const ProvinciaDeleteManySchema = z.object({
  where: ProvinciaWhereInputObjectSchema.optional(),
});
