import { z } from 'zod';
import { DepartmentoWhereUniqueInputObjectSchema } from './objects/DepartmentoWhereUniqueInput.schema';

export const DepartmentoFindUniqueSchema = z.object({
  where: DepartmentoWhereUniqueInputObjectSchema,
});
