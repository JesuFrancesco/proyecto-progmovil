import { z } from 'zod';
import { OrderCreateWithoutUserInputObjectSchema } from './OrderCreateWithoutUserInput.schema';
import { OrderUncheckedCreateWithoutUserInputObjectSchema } from './OrderUncheckedCreateWithoutUserInput.schema';
import { OrderCreateOrConnectWithoutUserInputObjectSchema } from './OrderCreateOrConnectWithoutUserInput.schema';
import { OrderUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './OrderUpsertWithWhereUniqueWithoutUserInput.schema';
import { OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema';
import { OrderUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './OrderUpdateWithWhereUniqueWithoutUserInput.schema';
import { OrderUpdateManyWithWhereWithoutUserInputObjectSchema } from './OrderUpdateManyWithWhereWithoutUserInput.schema';
import { OrderScalarWhereInputObjectSchema } from './OrderScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderUpdateManyWithoutUserNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => OrderCreateWithoutUserInputObjectSchema),
        z.lazy(() => OrderCreateWithoutUserInputObjectSchema).array(),
        z.lazy(() => OrderUncheckedCreateWithoutUserInputObjectSchema),
        z.lazy(() => OrderUncheckedCreateWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => OrderCreateOrConnectWithoutUserInputObjectSchema),
        z.lazy(() => OrderCreateOrConnectWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => OrderUpsertWithWhereUniqueWithoutUserInputObjectSchema),
        z
          .lazy(() => OrderUpsertWithWhereUniqueWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    set: z
      .union([
        z.lazy(() => OrderWhereUniqueInputObjectSchema),
        z.lazy(() => OrderWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => OrderWhereUniqueInputObjectSchema),
        z.lazy(() => OrderWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => OrderWhereUniqueInputObjectSchema),
        z.lazy(() => OrderWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => OrderWhereUniqueInputObjectSchema),
        z.lazy(() => OrderWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => OrderUpdateWithWhereUniqueWithoutUserInputObjectSchema),
        z
          .lazy(() => OrderUpdateWithWhereUniqueWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => OrderUpdateManyWithWhereWithoutUserInputObjectSchema),
        z
          .lazy(() => OrderUpdateManyWithWhereWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => OrderScalarWhereInputObjectSchema),
        z.lazy(() => OrderScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const OrderUpdateManyWithoutUserNestedInputObjectSchema = Schema;
