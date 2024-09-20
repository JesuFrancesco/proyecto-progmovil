import { z } from 'zod';
import { MarketProductCreateWithoutMarketInputObjectSchema } from './MarketProductCreateWithoutMarketInput.schema';
import { MarketProductUncheckedCreateWithoutMarketInputObjectSchema } from './MarketProductUncheckedCreateWithoutMarketInput.schema';
import { MarketProductCreateOrConnectWithoutMarketInputObjectSchema } from './MarketProductCreateOrConnectWithoutMarketInput.schema';
import { MarketProductWhereUniqueInputObjectSchema } from './MarketProductWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketProductCreateNestedManyWithoutMarketInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MarketProductCreateWithoutMarketInputObjectSchema),
          z
            .lazy(() => MarketProductCreateWithoutMarketInputObjectSchema)
            .array(),
          z.lazy(
            () => MarketProductUncheckedCreateWithoutMarketInputObjectSchema,
          ),
          z
            .lazy(
              () => MarketProductUncheckedCreateWithoutMarketInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => MarketProductCreateOrConnectWithoutMarketInputObjectSchema,
          ),
          z
            .lazy(
              () => MarketProductCreateOrConnectWithoutMarketInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => MarketProductWhereUniqueInputObjectSchema),
          z.lazy(() => MarketProductWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const MarketProductCreateNestedManyWithoutMarketInputObjectSchema =
  Schema;
