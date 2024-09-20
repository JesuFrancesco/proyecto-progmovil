import { z } from 'zod';
import { BrandSellerCreateNestedManyWithoutCountryInputObjectSchema } from './BrandSellerCreateNestedManyWithoutCountryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CountryCreateInput> = z
  .object({
    name: z.string(),
    code: z.string(),
    brandSellers: z
      .lazy(() => BrandSellerCreateNestedManyWithoutCountryInputObjectSchema)
      .optional(),
  })
  .strict();

export const CountryCreateInputObjectSchema = Schema;
