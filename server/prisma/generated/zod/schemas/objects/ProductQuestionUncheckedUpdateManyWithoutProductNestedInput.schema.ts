import { z } from 'zod';
import { ProductQuestionCreateWithoutProductInputObjectSchema } from './ProductQuestionCreateWithoutProductInput.schema';
import { ProductQuestionUncheckedCreateWithoutProductInputObjectSchema } from './ProductQuestionUncheckedCreateWithoutProductInput.schema';
import { ProductQuestionCreateOrConnectWithoutProductInputObjectSchema } from './ProductQuestionCreateOrConnectWithoutProductInput.schema';
import { ProductQuestionUpsertWithWhereUniqueWithoutProductInputObjectSchema } from './ProductQuestionUpsertWithWhereUniqueWithoutProductInput.schema';
import { ProductQuestionWhereUniqueInputObjectSchema } from './ProductQuestionWhereUniqueInput.schema';
import { ProductQuestionUpdateWithWhereUniqueWithoutProductInputObjectSchema } from './ProductQuestionUpdateWithWhereUniqueWithoutProductInput.schema';
import { ProductQuestionUpdateManyWithWhereWithoutProductInputObjectSchema } from './ProductQuestionUpdateManyWithWhereWithoutProductInput.schema';
import { ProductQuestionScalarWhereInputObjectSchema } from './ProductQuestionScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductQuestionUncheckedUpdateManyWithoutProductNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProductQuestionCreateWithoutProductInputObjectSchema),
          z
            .lazy(() => ProductQuestionCreateWithoutProductInputObjectSchema)
            .array(),
          z.lazy(
            () => ProductQuestionUncheckedCreateWithoutProductInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProductQuestionUncheckedCreateWithoutProductInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ProductQuestionCreateOrConnectWithoutProductInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProductQuestionCreateOrConnectWithoutProductInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ProductQuestionUpsertWithWhereUniqueWithoutProductInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProductQuestionUpsertWithWhereUniqueWithoutProductInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => ProductQuestionWhereUniqueInputObjectSchema),
          z.lazy(() => ProductQuestionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ProductQuestionWhereUniqueInputObjectSchema),
          z.lazy(() => ProductQuestionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ProductQuestionWhereUniqueInputObjectSchema),
          z.lazy(() => ProductQuestionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ProductQuestionWhereUniqueInputObjectSchema),
          z.lazy(() => ProductQuestionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ProductQuestionUpdateWithWhereUniqueWithoutProductInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProductQuestionUpdateWithWhereUniqueWithoutProductInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ProductQuestionUpdateManyWithWhereWithoutProductInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProductQuestionUpdateManyWithWhereWithoutProductInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ProductQuestionScalarWhereInputObjectSchema),
          z.lazy(() => ProductQuestionScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ProductQuestionUncheckedUpdateManyWithoutProductNestedInputObjectSchema =
  Schema;
