import { z } from 'zod';
import { CountryUpdateWithoutBrandSellersInputObjectSchema } from './CountryUpdateWithoutBrandSellersInput.schema';
import { CountryUncheckedUpdateWithoutBrandSellersInputObjectSchema } from './CountryUncheckedUpdateWithoutBrandSellersInput.schema';
import { CountryCreateWithoutBrandSellersInputObjectSchema } from './CountryCreateWithoutBrandSellersInput.schema';
import { CountryUncheckedCreateWithoutBrandSellersInputObjectSchema } from './CountryUncheckedCreateWithoutBrandSellersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CountryUpsertWithoutBrandSellersInput> = z
  .object({
    update: z.union([
      z.lazy(() => CountryUpdateWithoutBrandSellersInputObjectSchema),
      z.lazy(() => CountryUncheckedUpdateWithoutBrandSellersInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => CountryCreateWithoutBrandSellersInputObjectSchema),
      z.lazy(() => CountryUncheckedCreateWithoutBrandSellersInputObjectSchema),
    ]),
  })
  .strict();

export const CountryUpsertWithoutBrandSellersInputObjectSchema = Schema;
