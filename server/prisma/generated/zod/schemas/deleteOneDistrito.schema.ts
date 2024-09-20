import { z } from 'zod';
import { DistritoWhereUniqueInputObjectSchema } from './objects/DistritoWhereUniqueInput.schema';

export const DistritoDeleteOneSchema = z.object({
  where: DistritoWhereUniqueInputObjectSchema,
});
