import { z } from 'zod';
import { OrderCreateWithoutOrderItemsInputObjectSchema } from './OrderCreateWithoutOrderItemsInput.schema';
import { OrderUncheckedCreateWithoutOrderItemsInputObjectSchema } from './OrderUncheckedCreateWithoutOrderItemsInput.schema';
import { OrderCreateOrConnectWithoutOrderItemsInputObjectSchema } from './OrderCreateOrConnectWithoutOrderItemsInput.schema';
import { OrderUpsertWithoutOrderItemsInputObjectSchema } from './OrderUpsertWithoutOrderItemsInput.schema';
import { OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema';
import { OrderUpdateWithoutOrderItemsInputObjectSchema } from './OrderUpdateWithoutOrderItemsInput.schema';
import { OrderUncheckedUpdateWithoutOrderItemsInputObjectSchema } from './OrderUncheckedUpdateWithoutOrderItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderUpdateOneRequiredWithoutOrderItemsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => OrderCreateWithoutOrderItemsInputObjectSchema),
          z.lazy(() => OrderUncheckedCreateWithoutOrderItemsInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => OrderCreateOrConnectWithoutOrderItemsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => OrderUpsertWithoutOrderItemsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => OrderWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => OrderUpdateWithoutOrderItemsInputObjectSchema),
          z.lazy(() => OrderUncheckedUpdateWithoutOrderItemsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const OrderUpdateOneRequiredWithoutOrderItemsNestedInputObjectSchema =
  Schema;
