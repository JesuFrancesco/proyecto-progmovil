import { z } from 'zod';
import { WishlistWhereInputObjectSchema } from './WishlistWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WishlistRelationFilter> = z
  .object({
    is: z
      .lazy(() => WishlistWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => WishlistWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const WishlistRelationFilterObjectSchema = Schema;
