import { z } from 'zod';
import { ProductTagCreateWithoutProductInputObjectSchema } from './ProductTagCreateWithoutProductInput.schema';
import { ProductTagUncheckedCreateWithoutProductInputObjectSchema } from './ProductTagUncheckedCreateWithoutProductInput.schema';
import { ProductTagCreateOrConnectWithoutProductInputObjectSchema } from './ProductTagCreateOrConnectWithoutProductInput.schema';
import { ProductTagUpsertWithWhereUniqueWithoutProductInputObjectSchema } from './ProductTagUpsertWithWhereUniqueWithoutProductInput.schema';
import { ProductTagWhereUniqueInputObjectSchema } from './ProductTagWhereUniqueInput.schema';
import { ProductTagUpdateWithWhereUniqueWithoutProductInputObjectSchema } from './ProductTagUpdateWithWhereUniqueWithoutProductInput.schema';
import { ProductTagUpdateManyWithWhereWithoutProductInputObjectSchema } from './ProductTagUpdateManyWithWhereWithoutProductInput.schema';
import { ProductTagScalarWhereInputObjectSchema } from './ProductTagScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductTagUncheckedUpdateManyWithoutProductNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProductTagCreateWithoutProductInputObjectSchema),
          z.lazy(() => ProductTagCreateWithoutProductInputObjectSchema).array(),
          z.lazy(
            () => ProductTagUncheckedCreateWithoutProductInputObjectSchema,
          ),
          z
            .lazy(
              () => ProductTagUncheckedCreateWithoutProductInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ProductTagCreateOrConnectWithoutProductInputObjectSchema,
          ),
          z
            .lazy(
              () => ProductTagCreateOrConnectWithoutProductInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ProductTagUpsertWithWhereUniqueWithoutProductInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProductTagUpsertWithWhereUniqueWithoutProductInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => ProductTagWhereUniqueInputObjectSchema),
          z.lazy(() => ProductTagWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ProductTagWhereUniqueInputObjectSchema),
          z.lazy(() => ProductTagWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ProductTagWhereUniqueInputObjectSchema),
          z.lazy(() => ProductTagWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ProductTagWhereUniqueInputObjectSchema),
          z.lazy(() => ProductTagWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ProductTagUpdateWithWhereUniqueWithoutProductInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProductTagUpdateWithWhereUniqueWithoutProductInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => ProductTagUpdateManyWithWhereWithoutProductInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProductTagUpdateManyWithWhereWithoutProductInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ProductTagScalarWhereInputObjectSchema),
          z.lazy(() => ProductTagScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ProductTagUncheckedUpdateManyWithoutProductNestedInputObjectSchema =
  Schema;
