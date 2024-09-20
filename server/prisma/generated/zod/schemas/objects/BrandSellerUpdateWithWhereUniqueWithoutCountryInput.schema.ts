import { z } from 'zod';
import { BrandSellerWhereUniqueInputObjectSchema } from './BrandSellerWhereUniqueInput.schema';
import { BrandSellerUpdateWithoutCountryInputObjectSchema } from './BrandSellerUpdateWithoutCountryInput.schema';
import { BrandSellerUncheckedUpdateWithoutCountryInputObjectSchema } from './BrandSellerUncheckedUpdateWithoutCountryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BrandSellerUpdateWithWhereUniqueWithoutCountryInput> =
  z
    .object({
      where: z.lazy(() => BrandSellerWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => BrandSellerUpdateWithoutCountryInputObjectSchema),
        z.lazy(() => BrandSellerUncheckedUpdateWithoutCountryInputObjectSchema),
      ]),
    })
    .strict();

export const BrandSellerUpdateWithWhereUniqueWithoutCountryInputObjectSchema =
  Schema;
