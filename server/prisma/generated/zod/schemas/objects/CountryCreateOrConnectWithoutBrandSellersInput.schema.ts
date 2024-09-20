import { z } from 'zod';
import { CountryWhereUniqueInputObjectSchema } from './CountryWhereUniqueInput.schema';
import { CountryCreateWithoutBrandSellersInputObjectSchema } from './CountryCreateWithoutBrandSellersInput.schema';
import { CountryUncheckedCreateWithoutBrandSellersInputObjectSchema } from './CountryUncheckedCreateWithoutBrandSellersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CountryCreateOrConnectWithoutBrandSellersInput> =
  z
    .object({
      where: z.lazy(() => CountryWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => CountryCreateWithoutBrandSellersInputObjectSchema),
        z.lazy(
          () => CountryUncheckedCreateWithoutBrandSellersInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const CountryCreateOrConnectWithoutBrandSellersInputObjectSchema =
  Schema;
