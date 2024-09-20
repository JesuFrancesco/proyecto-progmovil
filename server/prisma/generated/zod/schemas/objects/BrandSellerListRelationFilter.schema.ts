import { z } from 'zod';
import { BrandSellerWhereInputObjectSchema } from './BrandSellerWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BrandSellerListRelationFilter> = z
  .object({
    every: z.lazy(() => BrandSellerWhereInputObjectSchema).optional(),
    some: z.lazy(() => BrandSellerWhereInputObjectSchema).optional(),
    none: z.lazy(() => BrandSellerWhereInputObjectSchema).optional(),
  })
  .strict();

export const BrandSellerListRelationFilterObjectSchema = Schema;
