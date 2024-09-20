import { z } from 'zod';
import { MarketCreateWithoutMarketProductsInputObjectSchema } from './MarketCreateWithoutMarketProductsInput.schema';
import { MarketUncheckedCreateWithoutMarketProductsInputObjectSchema } from './MarketUncheckedCreateWithoutMarketProductsInput.schema';
import { MarketCreateOrConnectWithoutMarketProductsInputObjectSchema } from './MarketCreateOrConnectWithoutMarketProductsInput.schema';
import { MarketUpsertWithoutMarketProductsInputObjectSchema } from './MarketUpsertWithoutMarketProductsInput.schema';
import { MarketWhereUniqueInputObjectSchema } from './MarketWhereUniqueInput.schema';
import { MarketUpdateWithoutMarketProductsInputObjectSchema } from './MarketUpdateWithoutMarketProductsInput.schema';
import { MarketUncheckedUpdateWithoutMarketProductsInputObjectSchema } from './MarketUncheckedUpdateWithoutMarketProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketUpdateOneRequiredWithoutMarketProductsNestedInput> =
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
      upsert: z
        .lazy(() => MarketUpsertWithoutMarketProductsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => MarketWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => MarketUpdateWithoutMarketProductsInputObjectSchema),
          z.lazy(
            () => MarketUncheckedUpdateWithoutMarketProductsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const MarketUpdateOneRequiredWithoutMarketProductsNestedInputObjectSchema =
  Schema;
