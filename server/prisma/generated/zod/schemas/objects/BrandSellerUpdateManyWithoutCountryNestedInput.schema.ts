import { z } from 'zod';
import { BrandSellerCreateWithoutCountryInputObjectSchema } from './BrandSellerCreateWithoutCountryInput.schema';
import { BrandSellerUncheckedCreateWithoutCountryInputObjectSchema } from './BrandSellerUncheckedCreateWithoutCountryInput.schema';
import { BrandSellerCreateOrConnectWithoutCountryInputObjectSchema } from './BrandSellerCreateOrConnectWithoutCountryInput.schema';
import { BrandSellerUpsertWithWhereUniqueWithoutCountryInputObjectSchema } from './BrandSellerUpsertWithWhereUniqueWithoutCountryInput.schema';
import { BrandSellerWhereUniqueInputObjectSchema } from './BrandSellerWhereUniqueInput.schema';
import { BrandSellerUpdateWithWhereUniqueWithoutCountryInputObjectSchema } from './BrandSellerUpdateWithWhereUniqueWithoutCountryInput.schema';
import { BrandSellerUpdateManyWithWhereWithoutCountryInputObjectSchema } from './BrandSellerUpdateManyWithWhereWithoutCountryInput.schema';
import { BrandSellerScalarWhereInputObjectSchema } from './BrandSellerScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BrandSellerUpdateManyWithoutCountryNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              BrandSellerUpsertWithWhereUniqueWithoutCountryInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BrandSellerUpsertWithWhereUniqueWithoutCountryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => BrandSellerWhereUniqueInputObjectSchema),
          z.lazy(() => BrandSellerWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => BrandSellerWhereUniqueInputObjectSchema),
          z.lazy(() => BrandSellerWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => BrandSellerWhereUniqueInputObjectSchema),
          z.lazy(() => BrandSellerWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => BrandSellerWhereUniqueInputObjectSchema),
          z.lazy(() => BrandSellerWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              BrandSellerUpdateWithWhereUniqueWithoutCountryInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BrandSellerUpdateWithWhereUniqueWithoutCountryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => BrandSellerUpdateManyWithWhereWithoutCountryInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BrandSellerUpdateManyWithWhereWithoutCountryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => BrandSellerScalarWhereInputObjectSchema),
          z.lazy(() => BrandSellerScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const BrandSellerUpdateManyWithoutCountryNestedInputObjectSchema =
  Schema;
