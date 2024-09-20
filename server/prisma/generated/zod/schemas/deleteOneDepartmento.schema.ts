import { z } from 'zod';
import { DepartmentoWhereUniqueInputObjectSchema } from './objects/DepartmentoWhereUniqueInput.schema';

export const DepartmentoDeleteOneSchema = z.object({
  where: DepartmentoWhereUniqueInputObjectSchema,
});
