import { z } from 'zod';
import { ShoppingCartCreateWithoutUserInputObjectSchema } from './ShoppingCartCreateWithoutUserInput.schema';
import { ShoppingCartUncheckedCreateWithoutUserInputObjectSchema } from './ShoppingCartUncheckedCreateWithoutUserInput.schema';
import { ShoppingCartCreateOrConnectWithoutUserInputObjectSchema } from './ShoppingCartCreateOrConnectWithoutUserInput.schema';
import { ShoppingCartUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './ShoppingCartUpsertWithWhereUniqueWithoutUserInput.schema';
import { ShoppingCartWhereUniqueInputObjectSchema } from './ShoppingCartWhereUniqueInput.schema';
import { ShoppingCartUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './ShoppingCartUpdateWithWhereUniqueWithoutUserInput.schema';
import { ShoppingCartUpdateManyWithWhereWithoutUserInputObjectSchema } from './ShoppingCartUpdateManyWithWhereWithoutUserInput.schema';
import { ShoppingCartScalarWhereInputObjectSchema } from './ShoppingCartScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ShoppingCartUpdateManyWithoutUserNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ShoppingCartCreateWithoutUserInputObjectSchema),
        z.lazy(() => ShoppingCartCreateWithoutUserInputObjectSchema).array(),
        z.lazy(() => ShoppingCartUncheckedCreateWithoutUserInputObjectSchema),
        z
          .lazy(() => ShoppingCartUncheckedCreateWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ShoppingCartCreateOrConnectWithoutUserInputObjectSchema),
        z
          .lazy(() => ShoppingCartCreateOrConnectWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => ShoppingCartUpsertWithWhereUniqueWithoutUserInputObjectSchema,
        ),
        z
          .lazy(
            () => ShoppingCartUpsertWithWhereUniqueWithoutUserInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    set: z
      .union([
        z.lazy(() => ShoppingCartWhereUniqueInputObjectSchema),
        z.lazy(() => ShoppingCartWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => ShoppingCartWhereUniqueInputObjectSchema),
        z.lazy(() => ShoppingCartWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => ShoppingCartWhereUniqueInputObjectSchema),
        z.lazy(() => ShoppingCartWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ShoppingCartWhereUniqueInputObjectSchema),
        z.lazy(() => ShoppingCartWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => ShoppingCartUpdateWithWhereUniqueWithoutUserInputObjectSchema,
        ),
        z
          .lazy(
            () => ShoppingCartUpdateWithWhereUniqueWithoutUserInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => ShoppingCartUpdateManyWithWhereWithoutUserInputObjectSchema,
        ),
        z
          .lazy(
            () => ShoppingCartUpdateManyWithWhereWithoutUserInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => ShoppingCartScalarWhereInputObjectSchema),
        z.lazy(() => ShoppingCartScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ShoppingCartUpdateManyWithoutUserNestedInputObjectSchema = Schema;
