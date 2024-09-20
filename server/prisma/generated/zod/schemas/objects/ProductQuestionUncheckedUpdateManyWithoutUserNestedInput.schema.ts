import { z } from 'zod';
import { ProductQuestionCreateWithoutUserInputObjectSchema } from './ProductQuestionCreateWithoutUserInput.schema';
import { ProductQuestionUncheckedCreateWithoutUserInputObjectSchema } from './ProductQuestionUncheckedCreateWithoutUserInput.schema';
import { ProductQuestionCreateOrConnectWithoutUserInputObjectSchema } from './ProductQuestionCreateOrConnectWithoutUserInput.schema';
import { ProductQuestionUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './ProductQuestionUpsertWithWhereUniqueWithoutUserInput.schema';
import { ProductQuestionWhereUniqueInputObjectSchema } from './ProductQuestionWhereUniqueInput.schema';
import { ProductQuestionUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './ProductQuestionUpdateWithWhereUniqueWithoutUserInput.schema';
import { ProductQuestionUpdateManyWithWhereWithoutUserInputObjectSchema } from './ProductQuestionUpdateManyWithWhereWithoutUserInput.schema';
import { ProductQuestionScalarWhereInputObjectSchema } from './ProductQuestionScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductQuestionUncheckedUpdateManyWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProductQuestionCreateWithoutUserInputObjectSchema),
          z
            .lazy(() => ProductQuestionCreateWithoutUserInputObjectSchema)
            .array(),
          z.lazy(
            () => ProductQuestionUncheckedCreateWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () => ProductQuestionUncheckedCreateWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ProductQuestionCreateOrConnectWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () => ProductQuestionCreateOrConnectWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ProductQuestionUpsertWithWhereUniqueWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProductQuestionUpsertWithWhereUniqueWithoutUserInputObjectSchema,
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
              ProductQuestionUpdateWithWhereUniqueWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProductQuestionUpdateWithWhereUniqueWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ProductQuestionUpdateManyWithWhereWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProductQuestionUpdateManyWithWhereWithoutUserInputObjectSchema,
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

export const ProductQuestionUncheckedUpdateManyWithoutUserNestedInputObjectSchema =
  Schema;
