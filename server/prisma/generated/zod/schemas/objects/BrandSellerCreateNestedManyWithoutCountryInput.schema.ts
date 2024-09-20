import { z } from 'zod';
import { BrandSellerCreateWithoutCountryInputObjectSchema } from './BrandSellerCreateWithoutCountryInput.schema';
import { BrandSellerUncheckedCreateWithoutCountryInputObjectSchema } from './BrandSellerUncheckedCreateWithoutCountryInput.schema';
import { BrandSellerCreateOrConnectWithoutCountryInputObjectSchema } from './BrandSellerCreateOrConnectWithoutCountryInput.schema';
import { BrandSellerWhereUniqueInputObjectSchema } from './BrandSellerWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BrandSellerCreateNestedManyWithoutCountryInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BrandSellerCreateWithoutCountryInputObjectSchema),
          z
            .lazy(() => BrandSellerCreateWithoutCountryInputObjectSchema)
            .array(),
          z.lazy(
            () => BrandSellerUncheckedCreateWithoutCountryInputObjectSchema,
          ),
          z
            .lazy(
              () => BrandSellerUncheckedCreateWithoutCountryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => BrandSellerCreateOrConnectWithoutCountryInputObjectSchema,
          ),
          z
            .lazy(
              () => BrandSellerCreateOrConnectWithoutCountryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => BrandSellerWhereUniqueInputObjectSchema),
          z.lazy(() => BrandSellerWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const BrandSellerCreateNestedManyWithoutCountryInputObjectSchema =
  Schema;
