import { z } from 'zod';
import { WishlistWhereInputObjectSchema } from './WishlistWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WishlistListRelationFilter> = z
  .object({
    every: z.lazy(() => WishlistWhereInputObjectSchema).optional(),
    some: z.lazy(() => WishlistWhereInputObjectSchema).optional(),
    none: z.lazy(() => WishlistWhereInputObjectSchema).optional(),
  })
  .strict();

export const WishlistListRelationFilterObjectSchema = Schema;
