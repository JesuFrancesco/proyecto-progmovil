import { z } from 'zod';
import { ProvinciaWhereInputObjectSchema } from './ProvinciaWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProvinciaRelationFilter> = z
  .object({
    is: z
      .lazy(() => ProvinciaWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => ProvinciaWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const ProvinciaRelationFilterObjectSchema = Schema;
