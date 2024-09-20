import { z } from 'zod';
import { MarketProductWhereUniqueInputObjectSchema } from './MarketProductWhereUniqueInput.schema';
import { MarketProductCreateWithoutProductInputObjectSchema } from './MarketProductCreateWithoutProductInput.schema';
import { MarketProductUncheckedCreateWithoutProductInputObjectSchema } from './MarketProductUncheckedCreateWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketProductCreateOrConnectWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => MarketProductWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => MarketProductCreateWithoutProductInputObjectSchema),
        z.lazy(
          () => MarketProductUncheckedCreateWithoutProductInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MarketProductCreateOrConnectWithoutProductInputObjectSchema =
  Schema;
