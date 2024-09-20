import { z } from 'zod';
import { MarketCreateWithoutAccountInputObjectSchema } from './MarketCreateWithoutAccountInput.schema';
import { MarketUncheckedCreateWithoutAccountInputObjectSchema } from './MarketUncheckedCreateWithoutAccountInput.schema';
import { MarketCreateOrConnectWithoutAccountInputObjectSchema } from './MarketCreateOrConnectWithoutAccountInput.schema';
import { MarketUpsertWithWhereUniqueWithoutAccountInputObjectSchema } from './MarketUpsertWithWhereUniqueWithoutAccountInput.schema';
import { MarketWhereUniqueInputObjectSchema } from './MarketWhereUniqueInput.schema';
import { MarketUpdateWithWhereUniqueWithoutAccountInputObjectSchema } from './MarketUpdateWithWhereUniqueWithoutAccountInput.schema';
import { MarketUpdateManyWithWhereWithoutAccountInputObjectSchema } from './MarketUpdateManyWithWhereWithoutAccountInput.schema';
import { MarketScalarWhereInputObjectSchema } from './MarketScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketUpdateManyWithoutAccountNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => MarketCreateWithoutAccountInputObjectSchema),
        z.lazy(() => MarketCreateWithoutAccountInputObjectSchema).array(),
        z.lazy(() => MarketUncheckedCreateWithoutAccountInputObjectSchema),
        z
          .lazy(() => MarketUncheckedCreateWithoutAccountInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => MarketCreateOrConnectWithoutAccountInputObjectSchema),
        z
          .lazy(() => MarketCreateOrConnectWithoutAccountInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => MarketUpsertWithWhereUniqueWithoutAccountInputObjectSchema,
        ),
        z
          .lazy(
            () => MarketUpsertWithWhereUniqueWithoutAccountInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    set: z
      .union([
        z.lazy(() => MarketWhereUniqueInputObjectSchema),
        z.lazy(() => MarketWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => MarketWhereUniqueInputObjectSchema),
        z.lazy(() => MarketWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => MarketWhereUniqueInputObjectSchema),
        z.lazy(() => MarketWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => MarketWhereUniqueInputObjectSchema),
        z.lazy(() => MarketWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => MarketUpdateWithWhereUniqueWithoutAccountInputObjectSchema,
        ),
        z
          .lazy(
            () => MarketUpdateWithWhereUniqueWithoutAccountInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => MarketUpdateManyWithWhereWithoutAccountInputObjectSchema),
        z
          .lazy(() => MarketUpdateManyWithWhereWithoutAccountInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => MarketScalarWhereInputObjectSchema),
        z.lazy(() => MarketScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const MarketUpdateManyWithoutAccountNestedInputObjectSchema = Schema;
