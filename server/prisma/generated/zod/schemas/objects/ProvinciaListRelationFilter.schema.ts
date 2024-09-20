import { z } from 'zod';
import { ProvinciaWhereInputObjectSchema } from './ProvinciaWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProvinciaListRelationFilter> = z
  .object({
    every: z.lazy(() => ProvinciaWhereInputObjectSchema).optional(),
    some: z.lazy(() => ProvinciaWhereInputObjectSchema).optional(),
    none: z.lazy(() => ProvinciaWhereInputObjectSchema).optional(),
  })
  .strict();

export const ProvinciaListRelationFilterObjectSchema = Schema;
