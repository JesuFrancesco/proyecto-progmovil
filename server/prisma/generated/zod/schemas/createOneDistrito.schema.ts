import { z } from 'zod';
import { DistritoCreateInputObjectSchema } from './objects/DistritoCreateInput.schema';
import { DistritoUncheckedCreateInputObjectSchema } from './objects/DistritoUncheckedCreateInput.schema';

export const DistritoCreateOneSchema = z.object({
  data: z.union([
    DistritoCreateInputObjectSchema,
    DistritoUncheckedCreateInputObjectSchema,
  ]),
});
