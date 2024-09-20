import { z } from 'zod';
import { OrderItemCreateWithoutProductInputObjectSchema } from './OrderItemCreateWithoutProductInput.schema';
import { OrderItemUncheckedCreateWithoutProductInputObjectSchema } from './OrderItemUncheckedCreateWithoutProductInput.schema';
import { OrderItemCreateOrConnectWithoutProductInputObjectSchema } from './OrderItemCreateOrConnectWithoutProductInput.schema';
import { OrderItemWhereUniqueInputObjectSchema } from './OrderItemWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderItemCreateNestedManyWithoutProductInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => OrderItemCreateWithoutProductInputObjectSchema),
        z.lazy(() => OrderItemCreateWithoutProductInputObjectSchema).array(),
        z.lazy(() => OrderItemUncheckedCreateWithoutProductInputObjectSchema),
        z
          .lazy(() => OrderItemUncheckedCreateWithoutProductInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => OrderItemCreateOrConnectWithoutProductInputObjectSchema),
        z
          .lazy(() => OrderItemCreateOrConnectWithoutProductInputObjectSchema)
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

export const OrderItemCreateNestedManyWithoutProductInputObjectSchema = Schema;
