import { z } from 'zod';
import { DistritoWhereInputObjectSchema } from './objects/DistritoWhereInput.schema';

export const DistritoDeleteManySchema = z.object({
  where: DistritoWhereInputObjectSchema.optional(),
});
