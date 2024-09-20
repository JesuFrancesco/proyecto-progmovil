import { z } from 'zod';
import { MarketScalarWhereInputObjectSchema } from './MarketScalarWhereInput.schema';
import { MarketUpdateManyMutationInputObjectSchema } from './MarketUpdateManyMutationInput.schema';
import { MarketUncheckedUpdateManyWithoutMarketsInputObjectSchema } from './MarketUncheckedUpdateManyWithoutMarketsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketUpdateManyWithWhereWithoutAccountInput> = z
  .object({
    where: z.lazy(() => MarketScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => MarketUpdateManyMutationInputObjectSchema),
      z.lazy(() => MarketUncheckedUpdateManyWithoutMarketsInputObjectSchema),
    ]),
  })
  .strict();

export const MarketUpdateManyWithWhereWithoutAccountInputObjectSchema = Schema;
