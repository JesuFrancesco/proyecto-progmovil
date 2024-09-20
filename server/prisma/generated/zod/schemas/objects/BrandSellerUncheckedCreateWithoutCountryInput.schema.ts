import { z } from 'zod';
import { ProductUncheckedCreateNestedManyWithoutBrandSellerInputObjectSchema } from './ProductUncheckedCreateNestedManyWithoutBrandSellerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BrandSellerUncheckedCreateWithoutCountryInput> =
  z
    .object({
      id: z.number().optional(),
      name: z.string(),
      countryOrigin: z.string(),
      referenceLocation: z.string(),
      products: z
        .lazy(
          () =>
            ProductUncheckedCreateNestedManyWithoutBrandSellerInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const BrandSellerUncheckedCreateWithoutCountryInputObjectSchema = Schema;
