import { z } from 'zod';
import { MarketProductWhereUniqueInputObjectSchema } from './MarketProductWhereUniqueInput.schema';
import { MarketProductUpdateWithoutProductInputObjectSchema } from './MarketProductUpdateWithoutProductInput.schema';
import { MarketProductUncheckedUpdateWithoutProductInputObjectSchema } from './MarketProductUncheckedUpdateWithoutProductInput.schema';
import { MarketProductCreateWithoutProductInputObjectSchema } from './MarketProductCreateWithoutProductInput.schema';
import { MarketProductUncheckedCreateWithoutProductInputObjectSchema } from './MarketProductUncheckedCreateWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketProductUpsertWithWhereUniqueWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => MarketProductWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => MarketProductUpdateWithoutProductInputObjectSchema),
        z.lazy(
          () => MarketProductUncheckedUpdateWithoutProductInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => MarketProductCreateWithoutProductInputObjectSchema),
        z.lazy(
          () => MarketProductUncheckedCreateWithoutProductInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MarketProductUpsertWithWhereUniqueWithoutProductInputObjectSchema =
  Schema;
