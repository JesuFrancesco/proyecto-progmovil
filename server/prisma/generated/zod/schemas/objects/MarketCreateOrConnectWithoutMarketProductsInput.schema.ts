import { z } from 'zod';
import { MarketWhereUniqueInputObjectSchema } from './MarketWhereUniqueInput.schema';
import { MarketCreateWithoutMarketProductsInputObjectSchema } from './MarketCreateWithoutMarketProductsInput.schema';
import { MarketUncheckedCreateWithoutMarketProductsInputObjectSchema } from './MarketUncheckedCreateWithoutMarketProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketCreateOrConnectWithoutMarketProductsInput> =
  z
    .object({
      where: z.lazy(() => MarketWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => MarketCreateWithoutMarketProductsInputObjectSchema),
        z.lazy(
          () => MarketUncheckedCreateWithoutMarketProductsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MarketCreateOrConnectWithoutMarketProductsInputObjectSchema =
  Schema;
