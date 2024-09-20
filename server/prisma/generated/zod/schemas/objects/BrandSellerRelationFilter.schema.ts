import { z } from 'zod';
import { BrandSellerWhereInputObjectSchema } from './BrandSellerWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BrandSellerRelationFilter> = z
  .object({
    is: z
      .lazy(() => BrandSellerWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => BrandSellerWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const BrandSellerRelationFilterObjectSchema = Schema;
