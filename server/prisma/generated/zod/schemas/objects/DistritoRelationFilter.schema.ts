import { z } from 'zod';
import { DistritoWhereInputObjectSchema } from './DistritoWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DistritoRelationFilter> = z
  .object({
    is: z
      .lazy(() => DistritoWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => DistritoWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const DistritoRelationFilterObjectSchema = Schema;
