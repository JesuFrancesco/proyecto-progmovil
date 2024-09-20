import { z } from 'zod';
import { MarketProductWhereUniqueInputObjectSchema } from './MarketProductWhereUniqueInput.schema';
import { MarketProductCreateWithoutMarketInputObjectSchema } from './MarketProductCreateWithoutMarketInput.schema';
import { MarketProductUncheckedCreateWithoutMarketInputObjectSchema } from './MarketProductUncheckedCreateWithoutMarketInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketProductCreateOrConnectWithoutMarketInput> =
  z
    .object({
      where: z.lazy(() => MarketProductWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => MarketProductCreateWithoutMarketInputObjectSchema),
        z.lazy(
          () => MarketProductUncheckedCreateWithoutMarketInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MarketProductCreateOrConnectWithoutMarketInputObjectSchema =
  Schema;
