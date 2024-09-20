import { z } from 'zod';
import { OrderItemCreateWithoutOrderInputObjectSchema } from './OrderItemCreateWithoutOrderInput.schema';
import { OrderItemUncheckedCreateWithoutOrderInputObjectSchema } from './OrderItemUncheckedCreateWithoutOrderInput.schema';
import { OrderItemCreateOrConnectWithoutOrderInputObjectSchema } from './OrderItemCreateOrConnectWithoutOrderInput.schema';
import { OrderItemWhereUniqueInputObjectSchema } from './OrderItemWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderItemUncheckedCreateNestedManyWithoutOrderInput> =
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
      connect: z
        .union([
          z.lazy(() => OrderItemWhereUniqueInputObjectSchema),
          z.lazy(() => OrderItemWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const OrderItemUncheckedCreateNestedManyWithoutOrderInputObjectSchema =
  Schema;
