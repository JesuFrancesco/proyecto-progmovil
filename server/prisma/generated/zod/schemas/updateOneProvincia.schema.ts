import { z } from 'zod';
import { ProvinciaUpdateInputObjectSchema } from './objects/ProvinciaUpdateInput.schema';
import { ProvinciaUncheckedUpdateInputObjectSchema } from './objects/ProvinciaUncheckedUpdateInput.schema';
import { ProvinciaWhereUniqueInputObjectSchema } from './objects/ProvinciaWhereUniqueInput.schema';

export const ProvinciaUpdateOneSchema = z.object({
  data: z.union([
    ProvinciaUpdateInputObjectSchema,
    ProvinciaUncheckedUpdateInputObjectSchema,
  ]),
  where: ProvinciaWhereUniqueInputObjectSchema,
});
