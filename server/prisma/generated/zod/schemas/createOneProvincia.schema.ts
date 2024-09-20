import { z } from 'zod';
import { ProvinciaCreateInputObjectSchema } from './objects/ProvinciaCreateInput.schema';
import { ProvinciaUncheckedCreateInputObjectSchema } from './objects/ProvinciaUncheckedCreateInput.schema';

export const ProvinciaCreateOneSchema = z.object({
  data: z.union([
    ProvinciaCreateInputObjectSchema,
    ProvinciaUncheckedCreateInputObjectSchema,
  ]),
});
