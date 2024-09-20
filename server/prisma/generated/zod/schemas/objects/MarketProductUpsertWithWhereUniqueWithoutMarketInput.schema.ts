import { z } from 'zod';
import { MarketProductWhereUniqueInputObjectSchema } from './MarketProductWhereUniqueInput.schema';
import { MarketProductUpdateWithoutMarketInputObjectSchema } from './MarketProductUpdateWithoutMarketInput.schema';
import { MarketProductUncheckedUpdateWithoutMarketInputObjectSchema } from './MarketProductUncheckedUpdateWithoutMarketInput.schema';
import { MarketProductCreateWithoutMarketInputObjectSchema } from './MarketProductCreateWithoutMarketInput.schema';
import { MarketProductUncheckedCreateWithoutMarketInputObjectSchema } from './MarketProductUncheckedCreateWithoutMarketInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketProductUpsertWithWhereUniqueWithoutMarketInput> =
  z
    .object({
      where: z.lazy(() => MarketProductWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => MarketProductUpdateWithoutMarketInputObjectSchema),
        z.lazy(
          () => MarketProductUncheckedUpdateWithoutMarketInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => MarketProductCreateWithoutMarketInputObjectSchema),
        z.lazy(
          () => MarketProductUncheckedCreateWithoutMarketInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MarketProductUpsertWithWhereUniqueWithoutMarketInputObjectSchema =
  Schema;
