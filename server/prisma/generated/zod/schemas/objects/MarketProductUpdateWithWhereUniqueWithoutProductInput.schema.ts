import { z } from 'zod';
import { MarketProductWhereUniqueInputObjectSchema } from './MarketProductWhereUniqueInput.schema';
import { MarketProductUpdateWithoutProductInputObjectSchema } from './MarketProductUpdateWithoutProductInput.schema';
import { MarketProductUncheckedUpdateWithoutProductInputObjectSchema } from './MarketProductUncheckedUpdateWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketProductUpdateWithWhereUniqueWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => MarketProductWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => MarketProductUpdateWithoutProductInputObjectSchema),
        z.lazy(
          () => MarketProductUncheckedUpdateWithoutProductInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MarketProductUpdateWithWhereUniqueWithoutProductInputObjectSchema =
  Schema;
