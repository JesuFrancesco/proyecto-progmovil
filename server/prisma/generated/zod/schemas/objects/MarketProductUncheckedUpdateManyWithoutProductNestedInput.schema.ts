import { z } from 'zod';
import { MarketProductCreateWithoutProductInputObjectSchema } from './MarketProductCreateWithoutProductInput.schema';
import { MarketProductUncheckedCreateWithoutProductInputObjectSchema } from './MarketProductUncheckedCreateWithoutProductInput.schema';
import { MarketProductCreateOrConnectWithoutProductInputObjectSchema } from './MarketProductCreateOrConnectWithoutProductInput.schema';
import { MarketProductUpsertWithWhereUniqueWithoutProductInputObjectSchema } from './MarketProductUpsertWithWhereUniqueWithoutProductInput.schema';
import { MarketProductWhereUniqueInputObjectSchema } from './MarketProductWhereUniqueInput.schema';
import { MarketProductUpdateWithWhereUniqueWithoutProductInputObjectSchema } from './MarketProductUpdateWithWhereUniqueWithoutProductInput.schema';
import { MarketProductUpdateManyWithWhereWithoutProductInputObjectSchema } from './MarketProductUpdateManyWithWhereWithoutProductInput.schema';
import { MarketProductScalarWhereInputObjectSchema } from './MarketProductScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketProductUncheckedUpdateManyWithoutProductNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MarketProductCreateWithoutProductInputObjectSchema),
          z
            .lazy(() => MarketProductCreateWithoutProductInputObjectSchema)
            .array(),
          z.lazy(
            () => MarketProductUncheckedCreateWithoutProductInputObjectSchema,
          ),
          z
            .lazy(
              () => MarketProductUncheckedCreateWithoutProductInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => MarketProductCreateOrConnectWithoutProductInputObjectSchema,
          ),
          z
            .lazy(
              () => MarketProductCreateOrConnectWithoutProductInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              MarketProductUpsertWithWhereUniqueWithoutProductInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MarketProductUpsertWithWhereUniqueWithoutProductInputObjectSchema,
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
              MarketProductUpdateWithWhereUniqueWithoutProductInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MarketProductUpdateWithWhereUniqueWithoutProductInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              MarketProductUpdateManyWithWhereWithoutProductInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MarketProductUpdateManyWithWhereWithoutProductInputObjectSchema,
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

export const MarketProductUncheckedUpdateManyWithoutProductNestedInputObjectSchema =
  Schema;
