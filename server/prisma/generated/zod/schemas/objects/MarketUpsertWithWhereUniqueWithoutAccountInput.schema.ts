import { z } from 'zod';
import { MarketWhereUniqueInputObjectSchema } from './MarketWhereUniqueInput.schema';
import { MarketUpdateWithoutAccountInputObjectSchema } from './MarketUpdateWithoutAccountInput.schema';
import { MarketUncheckedUpdateWithoutAccountInputObjectSchema } from './MarketUncheckedUpdateWithoutAccountInput.schema';
import { MarketCreateWithoutAccountInputObjectSchema } from './MarketCreateWithoutAccountInput.schema';
import { MarketUncheckedCreateWithoutAccountInputObjectSchema } from './MarketUncheckedCreateWithoutAccountInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketUpsertWithWhereUniqueWithoutAccountInput> =
  z
    .object({
      where: z.lazy(() => MarketWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => MarketUpdateWithoutAccountInputObjectSchema),
        z.lazy(() => MarketUncheckedUpdateWithoutAccountInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => MarketCreateWithoutAccountInputObjectSchema),
        z.lazy(() => MarketUncheckedCreateWithoutAccountInputObjectSchema),
      ]),
    })
    .strict();

export const MarketUpsertWithWhereUniqueWithoutAccountInputObjectSchema =
  Schema;
