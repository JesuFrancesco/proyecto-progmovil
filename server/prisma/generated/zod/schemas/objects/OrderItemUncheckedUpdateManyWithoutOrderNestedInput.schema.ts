import { z } from 'zod';
import { OrderItemCreateWithoutOrderInputObjectSchema } from './OrderItemCreateWithoutOrderInput.schema';
import { OrderItemUncheckedCreateWithoutOrderInputObjectSchema } from './OrderItemUncheckedCreateWithoutOrderInput.schema';
import { OrderItemCreateOrConnectWithoutOrderInputObjectSchema } from './OrderItemCreateOrConnectWithoutOrderInput.schema';
import { OrderItemUpsertWithWhereUniqueWithoutOrderInputObjectSchema } from './OrderItemUpsertWithWhereUniqueWithoutOrderInput.schema';
import { OrderItemWhereUniqueInputObjectSchema } from './OrderItemWhereUniqueInput.schema';
import { OrderItemUpdateWithWhereUniqueWithoutOrderInputObjectSchema } from './OrderItemUpdateWithWhereUniqueWithoutOrderInput.schema';
import { OrderItemUpdateManyWithWhereWithoutOrderInputObjectSchema } from './OrderItemUpdateManyWithWhereWithoutOrderInput.schema';
import { OrderItemScalarWhereInputObjectSchema } from './OrderItemScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderItemUncheckedUpdateManyWithoutOrderNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => OrderItemCreateWithoutOrderInputObjectSchema),
          z.lazy(() => OrderItemCreateWithoutOrderInputObjectSchema).array(),
          z.lazy(() => OrderItemUncheckedCreateWithoutOrderInputObjectSchema),
          z
            .lazy(() => OrderItemUncheckedCreateWithoutOrderInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => OrderItemCreateOrConnectWithoutOrderInputObjectSchema),
          z
            .lazy(() => OrderItemCreateOrConnectWithoutOrderInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => OrderItemUpsertWithWhereUniqueWithoutOrderInputObjectSchema,
          ),
          z
            .lazy(
              () => OrderItemUpsertWithWhereUniqueWithoutOrderInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => OrderItemWhereUniqueInputObjectSchema),
          z.lazy(() => OrderItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => OrderItemWhereUniqueInputObjectSchema),
          z.lazy(() => OrderItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => OrderItemWhereUniqueInputObjectSchema),
          z.lazy(() => OrderItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => OrderItemWhereUniqueInputObjectSchema),
          z.lazy(() => OrderItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => OrderItemUpdateWithWhereUniqueWithoutOrderInputObjectSchema,
          ),
          z
            .lazy(
              () => OrderItemUpdateWithWhereUniqueWithoutOrderInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => OrderItemUpdateManyWithWhereWithoutOrderInputObjectSchema,
          ),
          z
            .lazy(
              () => OrderItemUpdateManyWithWhereWithoutOrderInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => OrderItemScalarWhereInputObjectSchema),
          z.lazy(() => OrderItemScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const OrderItemUncheckedUpdateManyWithoutOrderNestedInputObjectSchema =
  Schema;
