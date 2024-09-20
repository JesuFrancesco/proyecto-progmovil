import { z } from 'zod';
import { ProductTagCreateWithoutTagInputObjectSchema } from './ProductTagCreateWithoutTagInput.schema';
import { ProductTagUncheckedCreateWithoutTagInputObjectSchema } from './ProductTagUncheckedCreateWithoutTagInput.schema';
import { ProductTagCreateOrConnectWithoutTagInputObjectSchema } from './ProductTagCreateOrConnectWithoutTagInput.schema';
import { ProductTagUpsertWithWhereUniqueWithoutTagInputObjectSchema } from './ProductTagUpsertWithWhereUniqueWithoutTagInput.schema';
import { ProductTagWhereUniqueInputObjectSchema } from './ProductTagWhereUniqueInput.schema';
import { ProductTagUpdateWithWhereUniqueWithoutTagInputObjectSchema } from './ProductTagUpdateWithWhereUniqueWithoutTagInput.schema';
import { ProductTagUpdateManyWithWhereWithoutTagInputObjectSchema } from './ProductTagUpdateManyWithWhereWithoutTagInput.schema';
import { ProductTagScalarWhereInputObjectSchema } from './ProductTagScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductTagUpdateManyWithoutTagNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ProductTagCreateWithoutTagInputObjectSchema),
        z.lazy(() => ProductTagCreateWithoutTagInputObjectSchema).array(),
        z.lazy(() => ProductTagUncheckedCreateWithoutTagInputObjectSchema),
        z
          .lazy(() => ProductTagUncheckedCreateWithoutTagInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ProductTagCreateOrConnectWithoutTagInputObjectSchema),
        z
          .lazy(() => ProductTagCreateOrConnectWithoutTagInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => ProductTagUpsertWithWhereUniqueWithoutTagInputObjectSchema,
        ),
        z
          .lazy(
            () => ProductTagUpsertWithWhereUniqueWithoutTagInputObjectSchema,
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
          () => ProductTagUpdateWithWhereUniqueWithoutTagInputObjectSchema,
        ),
        z
          .lazy(
            () => ProductTagUpdateWithWhereUniqueWithoutTagInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => ProductTagUpdateManyWithWhereWithoutTagInputObjectSchema),
        z
          .lazy(() => ProductTagUpdateManyWithWhereWithoutTagInputObjectSchema)
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

export const ProductTagUpdateManyWithoutTagNestedInputObjectSchema = Schema;
