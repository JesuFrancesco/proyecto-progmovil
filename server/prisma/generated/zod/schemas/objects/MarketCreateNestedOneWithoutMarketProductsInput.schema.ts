import { z } from 'zod';
import { MarketCreateWithoutMarketProductsInputObjectSchema } from './MarketCreateWithoutMarketProductsInput.schema';
import { MarketUncheckedCreateWithoutMarketProductsInputObjectSchema } from './MarketUncheckedCreateWithoutMarketProductsInput.schema';
import { MarketCreateOrConnectWithoutMarketProductsInputObjectSchema } from './MarketCreateOrConnectWithoutMarketProductsInput.schema';
import { MarketWhereUniqueInputObjectSchema } from './MarketWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketCreateNestedOneWithoutMarketProductsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MarketCreateWithoutMarketProductsInputObjectSchema),
          z.lazy(
            () => MarketUncheckedCreateWithoutMarketProductsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => MarketCreateOrConnectWithoutMarketProductsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => MarketWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const MarketCreateNestedOneWithoutMarketProductsInputObjectSchema =
  Schema;
