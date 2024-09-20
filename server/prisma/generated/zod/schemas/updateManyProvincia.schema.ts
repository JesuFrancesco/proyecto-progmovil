import { z } from 'zod';
import { ProvinciaUpdateManyMutationInputObjectSchema } from './objects/ProvinciaUpdateManyMutationInput.schema';
import { ProvinciaWhereInputObjectSchema } from './objects/ProvinciaWhereInput.schema';

export const ProvinciaUpdateManySchema = z.object({
  data: ProvinciaUpdateManyMutationInputObjectSchema,
  where: ProvinciaWhereInputObjectSchema.optional(),
});
