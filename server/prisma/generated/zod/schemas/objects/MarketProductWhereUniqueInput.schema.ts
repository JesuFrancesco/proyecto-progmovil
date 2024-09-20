import { z } from 'zod';
import { MarketProductMarketIdProductIdCompoundUniqueInputObjectSchema } from './MarketProductMarketIdProductIdCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketProductWhereUniqueInput> = z
  .object({
    marketId_productId: z
      .lazy(() => MarketProductMarketIdProductIdCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const MarketProductWhereUniqueInputObjectSchema = Schema;
