import { z } from 'zod';
import { BrandSellerUncheckedCreateNestedManyWithoutCountryInputObjectSchema } from './BrandSellerUncheckedCreateNestedManyWithoutCountryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CountryUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    code: z.string(),
    brandSellers: z
      .lazy(
        () =>
          BrandSellerUncheckedCreateNestedManyWithoutCountryInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const CountryUncheckedCreateInputObjectSchema = Schema;
