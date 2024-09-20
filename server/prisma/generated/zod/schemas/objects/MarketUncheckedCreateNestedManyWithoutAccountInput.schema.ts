import { z } from 'zod';
import { MarketCreateWithoutAccountInputObjectSchema } from './MarketCreateWithoutAccountInput.schema';
import { MarketUncheckedCreateWithoutAccountInputObjectSchema } from './MarketUncheckedCreateWithoutAccountInput.schema';
import { MarketCreateOrConnectWithoutAccountInputObjectSchema } from './MarketCreateOrConnectWithoutAccountInput.schema';
import { MarketWhereUniqueInputObjectSchema } from './MarketWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketUncheckedCreateNestedManyWithoutAccountInput> =
  z
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
      connect: z
        .union([
          z.lazy(() => MarketWhereUniqueInputObjectSchema),
          z.lazy(() => MarketWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const MarketUncheckedCreateNestedManyWithoutAccountInputObjectSchema =
  Schema;
