import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AccountOrderByWithRelationInputObjectSchema } from './AccountOrderByWithRelationInput.schema';
import { MarketProductOrderByRelationAggregateInputObjectSchema } from './MarketProductOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    contactEmail: z.lazy(() => SortOrderSchema).optional(),
    contactPhone: z.lazy(() => SortOrderSchema).optional(),
    accountId: z.lazy(() => SortOrderSchema).optional(),
    account: z
      .lazy(() => AccountOrderByWithRelationInputObjectSchema)
      .optional(),
    marketProducts: z
      .lazy(() => MarketProductOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const MarketOrderByWithRelationInputObjectSchema = Schema;
