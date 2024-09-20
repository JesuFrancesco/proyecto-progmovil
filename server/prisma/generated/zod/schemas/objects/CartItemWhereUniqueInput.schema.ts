import { z } from 'zod';
import { CartItemCartIdProductIdCompoundUniqueInputObjectSchema } from './CartItemCartIdProductIdCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartItemWhereUniqueInput> = z
  .object({
    cartId_productId: z
      .lazy(() => CartItemCartIdProductIdCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const CartItemWhereUniqueInputObjectSchema = Schema;
