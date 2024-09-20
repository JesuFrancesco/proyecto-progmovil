import { z } from 'zod';
import { CountryCreateNestedOneWithoutBrandSellersInputObjectSchema } from './CountryCreateNestedOneWithoutBrandSellersInput.schema';
import { ProductCreateNestedManyWithoutBrandSellerInputObjectSchema } from './ProductCreateNestedManyWithoutBrandSellerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BrandSellerCreateInput> = z
  .object({
    name: z.string(),
    countryOrigin: z.string(),
    referenceLocation: z.string(),
    country: z.lazy(
      () => CountryCreateNestedOneWithoutBrandSellersInputObjectSchema,
    ),
    products: z
      .lazy(() => ProductCreateNestedManyWithoutBrandSellerInputObjectSchema)
      .optional(),
  })
  .strict();

export const BrandSellerCreateInputObjectSchema = Schema;
