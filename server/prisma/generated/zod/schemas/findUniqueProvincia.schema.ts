import { z } from 'zod';
import { ProvinciaWhereUniqueInputObjectSchema } from './objects/ProvinciaWhereUniqueInput.schema';

export const ProvinciaFindUniqueSchema = z.object({
  where: ProvinciaWhereUniqueInputObjectSchema,
});
