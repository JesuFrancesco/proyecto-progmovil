import { z } from 'zod';
import { CountryCreateNestedOneWithoutBrandSellersInputObjectSchema } from './CountryCreateNestedOneWithoutBrandSellersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BrandSellerCreateWithoutProductsInput> = z
  .object({
    name: z.string(),
    countryOrigin: z.string(),
    referenceLocation: z.string(),
    country: z.lazy(
      () => CountryCreateNestedOneWithoutBrandSellersInputObjectSchema,
    ),
  })
  .strict();

export const BrandSellerCreateWithoutProductsInputObjectSchema = Schema;
