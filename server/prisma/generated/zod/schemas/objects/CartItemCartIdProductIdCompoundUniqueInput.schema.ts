import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartItemCartIdProductIdCompoundUniqueInput> = z
  .object({
    cartId: z.number(),
    productId: z.number(),
  })
  .strict();

export const CartItemCartIdProductIdCompoundUniqueInputObjectSchema = Schema;
