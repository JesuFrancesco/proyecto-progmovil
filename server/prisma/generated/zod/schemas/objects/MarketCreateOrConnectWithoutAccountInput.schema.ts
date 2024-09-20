import { z } from 'zod';
import { MarketWhereUniqueInputObjectSchema } from './MarketWhereUniqueInput.schema';
import { MarketCreateWithoutAccountInputObjectSchema } from './MarketCreateWithoutAccountInput.schema';
import { MarketUncheckedCreateWithoutAccountInputObjectSchema } from './MarketUncheckedCreateWithoutAccountInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketCreateOrConnectWithoutAccountInput> = z
  .object({
    where: z.lazy(() => MarketWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => MarketCreateWithoutAccountInputObjectSchema),
      z.lazy(() => MarketUncheckedCreateWithoutAccountInputObjectSchema),
    ]),
  })
  .strict();

export const MarketCreateOrConnectWithoutAccountInputObjectSchema = Schema;
