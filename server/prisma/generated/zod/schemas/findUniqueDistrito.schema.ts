import { z } from 'zod';
import { DistritoWhereUniqueInputObjectSchema } from './objects/DistritoWhereUniqueInput.schema';

export const DistritoFindUniqueSchema = z.object({
  where: DistritoWhereUniqueInputObjectSchema,
});
