import { z } from 'zod';
import { MarketProductCreateWithoutProductInputObjectSchema } from './MarketProductCreateWithoutProductInput.schema';
import { MarketProductUncheckedCreateWithoutProductInputObjectSchema } from './MarketProductUncheckedCreateWithoutProductInput.schema';
import { MarketProductCreateOrConnectWithoutProductInputObjectSchema } from './MarketProductCreateOrConnectWithoutProductInput.schema';
import { MarketProductWhereUniqueInputObjectSchema } from './MarketProductWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketProductUncheckedCreateNestedManyWithoutProductInput> =
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
      connect: z
        .union([
          z.lazy(() => MarketProductWhereUniqueInputObjectSchema),
          z.lazy(() => MarketProductWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const MarketProductUncheckedCreateNestedManyWithoutProductInputObjectSchema =
  Schema;
