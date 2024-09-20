import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WishlistUpdateManyMutationInput> = z
  .object({})
  .strict();

export const WishlistUpdateManyMutationInputObjectSchema = Schema;
