import { z } from 'zod';
import { ProductRatingCreateWithoutUserInputObjectSchema } from './ProductRatingCreateWithoutUserInput.schema';
import { ProductRatingUncheckedCreateWithoutUserInputObjectSchema } from './ProductRatingUncheckedCreateWithoutUserInput.schema';
import { ProductRatingCreateOrConnectWithoutUserInputObjectSchema } from './ProductRatingCreateOrConnectWithoutUserInput.schema';
import { ProductRatingUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './ProductRatingUpsertWithWhereUniqueWithoutUserInput.schema';
import { ProductRatingWhereUniqueInputObjectSchema } from './ProductRatingWhereUniqueInput.schema';
import { ProductRatingUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './ProductRatingUpdateWithWhereUniqueWithoutUserInput.schema';
import { ProductRatingUpdateManyWithWhereWithoutUserInputObjectSchema } from './ProductRatingUpdateManyWithWhereWithoutUserInput.schema';
import { ProductRatingScalarWhereInputObjectSchema } from './ProductRatingScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductRatingUncheckedUpdateManyWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProductRatingCreateWithoutUserInputObjectSchema),
          z.lazy(() => ProductRatingCreateWithoutUserInputObjectSchema).array(),
          z.lazy(
            () => ProductRatingUncheckedCreateWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () => ProductRatingUncheckedCreateWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ProductRatingCreateOrConnectWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () => ProductRatingCreateOrConnectWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ProductRatingUpsertWithWhereUniqueWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProductRatingUpsertWithWhereUniqueWithoutUserInputObjectSchema,
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
              ProductRatingUpdateWithWhereUniqueWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProductRatingUpdateWithWhereUniqueWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => ProductRatingUpdateManyWithWhereWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProductRatingUpdateManyWithWhereWithoutUserInputObjectSchema,
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

export const ProductRatingUncheckedUpdateManyWithoutUserNestedInputObjectSchema =
  Schema;
