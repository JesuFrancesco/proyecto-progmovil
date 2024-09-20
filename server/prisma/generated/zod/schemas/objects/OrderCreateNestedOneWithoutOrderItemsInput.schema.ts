import { z } from 'zod';
import { OrderCreateWithoutOrderItemsInputObjectSchema } from './OrderCreateWithoutOrderItemsInput.schema';
import { OrderUncheckedCreateWithoutOrderItemsInputObjectSchema } from './OrderUncheckedCreateWithoutOrderItemsInput.schema';
import { OrderCreateOrConnectWithoutOrderItemsInputObjectSchema } from './OrderCreateOrConnectWithoutOrderItemsInput.schema';
import { OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderCreateNestedOneWithoutOrderItemsInput> = z
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
    connect: z.lazy(() => OrderWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const OrderCreateNestedOneWithoutOrderItemsInputObjectSchema = Schema;
