import { z } from 'zod';
import { DistritoWhereUniqueInputObjectSchema } from './objects/DistritoWhereUniqueInput.schema';
import { DistritoCreateInputObjectSchema } from './objects/DistritoCreateInput.schema';
import { DistritoUncheckedCreateInputObjectSchema } from './objects/DistritoUncheckedCreateInput.schema';
import { DistritoUpdateInputObjectSchema } from './objects/DistritoUpdateInput.schema';
import { DistritoUncheckedUpdateInputObjectSchema } from './objects/DistritoUncheckedUpdateInput.schema';

export const DistritoUpsertSchema = z.object({
  where: DistritoWhereUniqueInputObjectSchema,
  create: z.union([
    DistritoCreateInputObjectSchema,
    DistritoUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    DistritoUpdateInputObjectSchema,
    DistritoUncheckedUpdateInputObjectSchema,
  ]),
});
