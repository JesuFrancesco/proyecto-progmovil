import { z } from 'zod';
import { ProvinciaWhereUniqueInputObjectSchema } from './objects/ProvinciaWhereUniqueInput.schema';
import { ProvinciaCreateInputObjectSchema } from './objects/ProvinciaCreateInput.schema';
import { ProvinciaUncheckedCreateInputObjectSchema } from './objects/ProvinciaUncheckedCreateInput.schema';
import { ProvinciaUpdateInputObjectSchema } from './objects/ProvinciaUpdateInput.schema';
import { ProvinciaUncheckedUpdateInputObjectSchema } from './objects/ProvinciaUncheckedUpdateInput.schema';

export const ProvinciaUpsertSchema = z.object({
  where: ProvinciaWhereUniqueInputObjectSchema,
  create: z.union([
    ProvinciaCreateInputObjectSchema,
    ProvinciaUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ProvinciaUpdateInputObjectSchema,
    ProvinciaUncheckedUpdateInputObjectSchema,
  ]),
});
