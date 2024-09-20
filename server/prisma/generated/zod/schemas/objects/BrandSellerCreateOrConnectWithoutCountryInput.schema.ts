import { z } from 'zod';
import { BrandSellerWhereUniqueInputObjectSchema } from './BrandSellerWhereUniqueInput.schema';
import { BrandSellerCreateWithoutCountryInputObjectSchema } from './BrandSellerCreateWithoutCountryInput.schema';
import { BrandSellerUncheckedCreateWithoutCountryInputObjectSchema } from './BrandSellerUncheckedCreateWithoutCountryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BrandSellerCreateOrConnectWithoutCountryInput> =
  z
    .object({
      where: z.lazy(() => BrandSellerWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => BrandSellerCreateWithoutCountryInputObjectSchema),
        z.lazy(() => BrandSellerUncheckedCreateWithoutCountryInputObjectSchema),
      ]),
    })
    .strict();

export const BrandSellerCreateOrConnectWithoutCountryInputObjectSchema = Schema;
