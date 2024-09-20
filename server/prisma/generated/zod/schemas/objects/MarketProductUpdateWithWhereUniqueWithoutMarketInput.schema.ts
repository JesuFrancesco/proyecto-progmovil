import { z } from 'zod';
import { MarketProductWhereUniqueInputObjectSchema } from './MarketProductWhereUniqueInput.schema';
import { MarketProductUpdateWithoutMarketInputObjectSchema } from './MarketProductUpdateWithoutMarketInput.schema';
import { MarketProductUncheckedUpdateWithoutMarketInputObjectSchema } from './MarketProductUncheckedUpdateWithoutMarketInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketProductUpdateWithWhereUniqueWithoutMarketInput> =
  z
    .object({
      where: z.lazy(() => MarketProductWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => MarketProductUpdateWithoutMarketInputObjectSchema),
        z.lazy(
          () => MarketProductUncheckedUpdateWithoutMarketInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MarketProductUpdateWithWhereUniqueWithoutMarketInputObjectSchema =
  Schema;
