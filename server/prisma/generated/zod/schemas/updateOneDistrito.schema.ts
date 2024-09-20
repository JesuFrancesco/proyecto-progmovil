import { z } from 'zod';
import { DistritoUpdateInputObjectSchema } from './objects/DistritoUpdateInput.schema';
import { DistritoUncheckedUpdateInputObjectSchema } from './objects/DistritoUncheckedUpdateInput.schema';
import { DistritoWhereUniqueInputObjectSchema } from './objects/DistritoWhereUniqueInput.schema';

export const DistritoUpdateOneSchema = z.object({
  data: z.union([
    DistritoUpdateInputObjectSchema,
    DistritoUncheckedUpdateInputObjectSchema,
  ]),
  where: DistritoWhereUniqueInputObjectSchema,
});
