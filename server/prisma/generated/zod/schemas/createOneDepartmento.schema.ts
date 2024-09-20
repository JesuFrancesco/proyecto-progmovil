import { z } from 'zod';
import { DepartmentoCreateInputObjectSchema } from './objects/DepartmentoCreateInput.schema';
import { DepartmentoUncheckedCreateInputObjectSchema } from './objects/DepartmentoUncheckedCreateInput.schema';

export const DepartmentoCreateOneSchema = z.object({
  data: z.union([
    DepartmentoCreateInputObjectSchema,
    DepartmentoUncheckedCreateInputObjectSchema,
  ]),
});
