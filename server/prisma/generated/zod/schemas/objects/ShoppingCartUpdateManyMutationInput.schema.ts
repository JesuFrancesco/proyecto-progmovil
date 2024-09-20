import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ShoppingCartUpdateManyMutationInput> = z
  .object({})
  .strict();

export const ShoppingCartUpdateManyMutationInputObjectSchema = Schema;
