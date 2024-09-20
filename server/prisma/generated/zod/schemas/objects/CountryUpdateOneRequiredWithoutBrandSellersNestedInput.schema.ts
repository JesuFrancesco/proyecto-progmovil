import { z } from 'zod';
import { CountryCreateWithoutBrandSellersInputObjectSchema } from './CountryCreateWithoutBrandSellersInput.schema';
import { CountryUncheckedCreateWithoutBrandSellersInputObjectSchema } from './CountryUncheckedCreateWithoutBrandSellersInput.schema';
import { CountryCreateOrConnectWithoutBrandSellersInputObjectSchema } from './CountryCreateOrConnectWithoutBrandSellersInput.schema';
import { CountryUpsertWithoutBrandSellersInputObjectSchema } from './CountryUpsertWithoutBrandSellersInput.schema';
import { CountryWhereUniqueInputObjectSchema } from './CountryWhereUniqueInput.schema';
import { CountryUpdateWithoutBrandSellersInputObjectSchema } from './CountryUpdateWithoutBrandSellersInput.schema';
import { CountryUncheckedUpdateWithoutBrandSellersInputObjectSchema } from './CountryUncheckedUpdateWithoutBrandSellersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CountryUpdateOneRequiredWithoutBrandSellersNestedInput> =
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
      upsert: z
        .lazy(() => CountryUpsertWithoutBrandSellersInputObjectSchema)
        .optional(),
      connect: z.lazy(() => CountryWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => CountryUpdateWithoutBrandSellersInputObjectSchema),
          z.lazy(
            () => CountryUncheckedUpdateWithoutBrandSellersInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const CountryUpdateOneRequiredWithoutBrandSellersNestedInputObjectSchema =
  Schema;
