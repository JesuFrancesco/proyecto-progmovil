import { z } from 'zod';
import { DistritoUpdateManyMutationInputObjectSchema } from './objects/DistritoUpdateManyMutationInput.schema';
import { DistritoWhereInputObjectSchema } from './objects/DistritoWhereInput.schema';

export const DistritoUpdateManySchema = z.object({
  data: DistritoUpdateManyMutationInputObjectSchema,
  where: DistritoWhereInputObjectSchema.optional(),
});
