import { z } from 'zod';
import { ProductCreateNestedManyWithoutBrandSellerInputObjectSchema } from './ProductCreateNestedManyWithoutBrandSellerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BrandSellerCreateWithoutCountryInput> = z
  .object({
    name: z.string(),
    countryOrigin: z.string(),
    referenceLocation: z.string(),
    products: z
      .lazy(() => ProductCreateNestedManyWithoutBrandSellerInputObjectSchema)
      .optional(),
  })
  .strict();

export const BrandSellerCreateWithoutCountryInputObjectSchema = Schema;
