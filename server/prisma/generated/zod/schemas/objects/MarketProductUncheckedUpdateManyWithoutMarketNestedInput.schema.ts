import { z } from 'zod';
import { MarketProductCreateWithoutMarketInputObjectSchema } from './MarketProductCreateWithoutMarketInput.schema';
import { MarketProductUncheckedCreateWithoutMarketInputObjectSchema } from './MarketProductUncheckedCreateWithoutMarketInput.schema';
import { MarketProductCreateOrConnectWithoutMarketInputObjectSchema } from './MarketProductCreateOrConnectWithoutMarketInput.schema';
import { MarketProductUpsertWithWhereUniqueWithoutMarketInputObjectSchema } from './MarketProductUpsertWithWhereUniqueWithoutMarketInput.schema';
import { MarketProductWhereUniqueInputObjectSchema } from './MarketProductWhereUniqueInput.schema';
import { MarketProductUpdateWithWhereUniqueWithoutMarketInputObjectSchema } from './MarketProductUpdateWithWhereUniqueWithoutMarketInput.schema';
import { MarketProductUpdateManyWithWhereWithoutMarketInputObjectSchema } from './MarketProductUpdateManyWithWhereWithoutMarketInput.schema';
import { MarketProductScalarWhereInputObjectSchema } from './MarketProductScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketProductUncheckedUpdateManyWithoutMarketNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              MarketProductUpsertWithWhereUniqueWithoutMarketInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MarketProductUpsertWithWhereUniqueWithoutMarketInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => MarketProductWhereUniqueInputObjectSchema),
          z.lazy(() => MarketProductWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => MarketProductWhereUniqueInputObjectSchema),
          z.lazy(() => MarketProductWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => MarketProductWhereUniqueInputObjectSchema),
          z.lazy(() => MarketProductWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => MarketProductWhereUniqueInputObjectSchema),
          z.lazy(() => MarketProductWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              MarketProductUpdateWithWhereUniqueWithoutMarketInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MarketProductUpdateWithWhereUniqueWithoutMarketInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              MarketProductUpdateManyWithWhereWithoutMarketInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MarketProductUpdateManyWithWhereWithoutMarketInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => MarketProductScalarWhereInputObjectSchema),
          z.lazy(() => MarketProductScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const MarketProductUncheckedUpdateManyWithoutMarketNestedInputObjectSchema =
  Schema;
