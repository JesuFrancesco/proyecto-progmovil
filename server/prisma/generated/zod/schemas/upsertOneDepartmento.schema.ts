import { z } from 'zod';
import { DepartmentoWhereUniqueInputObjectSchema } from './objects/DepartmentoWhereUniqueInput.schema';
import { DepartmentoCreateInputObjectSchema } from './objects/DepartmentoCreateInput.schema';
import { DepartmentoUncheckedCreateInputObjectSchema } from './objects/DepartmentoUncheckedCreateInput.schema';
import { DepartmentoUpdateInputObjectSchema } from './objects/DepartmentoUpdateInput.schema';
import { DepartmentoUncheckedUpdateInputObjectSchema } from './objects/DepartmentoUncheckedUpdateInput.schema';

export const DepartmentoUpsertSchema = z.object({
  where: DepartmentoWhereUniqueInputObjectSchema,
  create: z.union([
    DepartmentoCreateInputObjectSchema,
    DepartmentoUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    DepartmentoUpdateInputObjectSchema,
    DepartmentoUncheckedUpdateInputObjectSchema,
  ]),
});
