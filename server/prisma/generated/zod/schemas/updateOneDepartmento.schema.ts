import { z } from 'zod';
import { DepartmentoUpdateInputObjectSchema } from './objects/DepartmentoUpdateInput.schema';
import { DepartmentoUncheckedUpdateInputObjectSchema } from './objects/DepartmentoUncheckedUpdateInput.schema';
import { DepartmentoWhereUniqueInputObjectSchema } from './objects/DepartmentoWhereUniqueInput.schema';

export const DepartmentoUpdateOneSchema = z.object({
  data: z.union([
    DepartmentoUpdateInputObjectSchema,
    DepartmentoUncheckedUpdateInputObjectSchema,
  ]),
  where: DepartmentoWhereUniqueInputObjectSchema,
});
