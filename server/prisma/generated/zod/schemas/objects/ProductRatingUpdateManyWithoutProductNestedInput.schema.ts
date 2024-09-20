import { z } from 'zod';
import { ProductRatingCreateWithoutProductInputObjectSchema } from './ProductRatingCreateWithoutProductInput.schema';
import { ProductRatingUncheckedCreateWithoutProductInputObjectSchema } from './ProductRatingUncheckedCreateWithoutProductInput.schema';
import { ProductRatingCreateOrConnectWithoutProductInputObjectSchema } from './ProductRatingCreateOrConnectWithoutProductInput.schema';
import { ProductRatingUpsertWithWhereUniqueWithoutProductInputObjectSchema } from './ProductRatingUpsertWithWhereUniqueWithoutProductInput.schema';
import { ProductRatingWhereUniqueInputObjectSchema } from './ProductRatingWhereUniqueInput.schema';
import { ProductRatingUpdateWithWhereUniqueWithoutProductInputObjectSchema } from './ProductRatingUpdateWithWhereUniqueWithoutProductInput.schema';
import { ProductRatingUpdateManyWithWhereWithoutProductInputObjectSchema } from './ProductRatingUpdateManyWithWhereWithoutProductInput.schema';
import { ProductRatingScalarWhereInputObjectSchema } from './ProductRatingScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductRatingUpdateManyWithoutProductNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProductRatingCreateWithoutProductInputObjectSchema),
          z
            .lazy(() => ProductRatingCreateWithoutProductInputObjectSchema)
            .array(),
          z.lazy(
            () => ProductRatingUncheckedCreateWithoutProductInputObjectSchema,
          ),
          z
            .lazy(
              () => ProductRatingUncheckedCreateWithoutProductInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ProductRatingCreateOrConnectWithoutProductInputObjectSchema,
          ),
          z
            .lazy(
              () => ProductRatingCreateOrConnectWithoutProductInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ProductRatingUpsertWithWhereUniqueWithoutProductInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProductRatingUpsertWithWhereUniqueWithoutProductInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => ProductRatingWhereUniqueInputObjectSchema),
          z.lazy(() => ProductRatingWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ProductRatingWhereUniqueInputObjectSchema),
          z.lazy(() => ProductRatingWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ProductRatingWhereUniqueInputObjectSchema),
          z.lazy(() => ProductRatingWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ProductRatingWhereUniqueInputObjectSchema),
          z.lazy(() => ProductRatingWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ProductRatingUpdateWithWhereUniqueWithoutProductInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProductRatingUpdateWithWhereUniqueWithoutProductInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ProductRatingUpdateManyWithWhereWithoutProductInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProductRatingUpdateManyWithWhereWithoutProductInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ProductRatingScalarWhereInputObjectSchema),
          z.lazy(() => ProductRatingScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ProductRatingUpdateManyWithoutProductNestedInputObjectSchema =
  Schema;
