import { z } from 'zod';
import { DepartmentoWhereInputObjectSchema } from './DepartmentoWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DepartmentoRelationFilter> = z
  .object({
    is: z
      .lazy(() => DepartmentoWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => DepartmentoWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const DepartmentoRelationFilterObjectSchema = Schema;
