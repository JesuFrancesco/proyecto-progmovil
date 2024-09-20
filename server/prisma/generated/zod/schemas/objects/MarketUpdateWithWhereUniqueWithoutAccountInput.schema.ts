import { z } from 'zod';
import { MarketWhereUniqueInputObjectSchema } from './MarketWhereUniqueInput.schema';
import { MarketUpdateWithoutAccountInputObjectSchema } from './MarketUpdateWithoutAccountInput.schema';
import { MarketUncheckedUpdateWithoutAccountInputObjectSchema } from './MarketUncheckedUpdateWithoutAccountInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketUpdateWithWhereUniqueWithoutAccountInput> =
  z
    .object({
      where: z.lazy(() => MarketWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => MarketUpdateWithoutAccountInputObjectSchema),
        z.lazy(() => MarketUncheckedUpdateWithoutAccountInputObjectSchema),
      ]),
    })
    .strict();

export const MarketUpdateWithWhereUniqueWithoutAccountInputObjectSchema =
  Schema;
