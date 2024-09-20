import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { MarketOrderByWithRelationInputObjectSchema } from './MarketOrderByWithRelationInput.schema';
import { ProductOrderByWithRelationInputObjectSchema } from './ProductOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketProductOrderByWithRelationInput> = z
  .object({
    marketId: z.lazy(() => SortOrderSchema).optional(),
    productId: z.lazy(() => SortOrderSchema).optional(),
    market: z.lazy(() => MarketOrderByWithRelationInputObjectSchema).optional(),
    product: z
      .lazy(() => ProductOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const MarketProductOrderByWithRelationInputObjectSchema = Schema;
