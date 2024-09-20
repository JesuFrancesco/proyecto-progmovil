import { z } from 'zod';
import { BrandSellerWhereUniqueInputObjectSchema } from './BrandSellerWhereUniqueInput.schema';
import { BrandSellerUpdateWithoutCountryInputObjectSchema } from './BrandSellerUpdateWithoutCountryInput.schema';
import { BrandSellerUncheckedUpdateWithoutCountryInputObjectSchema } from './BrandSellerUncheckedUpdateWithoutCountryInput.schema';
import { BrandSellerCreateWithoutCountryInputObjectSchema } from './BrandSellerCreateWithoutCountryInput.schema';
import { BrandSellerUncheckedCreateWithoutCountryInputObjectSchema } from './BrandSellerUncheckedCreateWithoutCountryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BrandSellerUpsertWithWhereUniqueWithoutCountryInput> =
  z
    .object({
      where: z.lazy(() => BrandSellerWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => BrandSellerUpdateWithoutCountryInputObjectSchema),
        z.lazy(() => BrandSellerUncheckedUpdateWithoutCountryInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => BrandSellerCreateWithoutCountryInputObjectSchema),
        z.lazy(() => BrandSellerUncheckedCreateWithoutCountryInputObjectSchema),
      ]),
    })
    .strict();

export const BrandSellerUpsertWithWhereUniqueWithoutCountryInputObjectSchema =
  Schema;
