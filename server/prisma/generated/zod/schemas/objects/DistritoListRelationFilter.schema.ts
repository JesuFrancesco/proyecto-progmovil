import { z } from 'zod';
import { DistritoWhereInputObjectSchema } from './DistritoWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DistritoListRelationFilter> = z
  .object({
    every: z.lazy(() => DistritoWhereInputObjectSchema).optional(),
    some: z.lazy(() => DistritoWhereInputObjectSchema).optional(),
    none: z.lazy(() => DistritoWhereInputObjectSchema).optional(),
  })
  .strict();

export const DistritoListRelationFilterObjectSchema = Schema;
