import { z } from 'zod';
import { ProvinciaWhereUniqueInputObjectSchema } from './objects/ProvinciaWhereUniqueInput.schema';

export const ProvinciaDeleteOneSchema = z.object({
  where: ProvinciaWhereUniqueInputObjectSchema,
});
