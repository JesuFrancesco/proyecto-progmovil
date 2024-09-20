import { z } from 'zod';
import { CountryCreateWithoutBrandSellersInputObjectSchema } from './CountryCreateWithoutBrandSellersInput.schema';
import { CountryUncheckedCreateWithoutBrandSellersInputObjectSchema } from './CountryUncheckedCreateWithoutBrandSellersInput.schema';
import { CountryCreateOrConnectWithoutBrandSellersInputObjectSchema } from './CountryCreateOrConnectWithoutBrandSellersInput.schema';
import { CountryWhereUniqueInputObjectSchema } from './CountryWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CountryCreateNestedOneWithoutBrandSellersInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CountryCreateWithoutBrandSellersInputObjectSchema),
          z.lazy(
            () => CountryUncheckedCreateWithoutBrandSellersInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => CountryCreateOrConnectWithoutBrandSellersInputObjectSchema)
        .optional(),
      connect: z.lazy(() => CountryWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const CountryCreateNestedOneWithoutBrandSellersInputObjectSchema =
  Schema;
