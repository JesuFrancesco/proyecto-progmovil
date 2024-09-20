import { z } from 'zod';
import { OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema';
import { OrderCreateWithoutOrderItemsInputObjectSchema } from './OrderCreateWithoutOrderItemsInput.schema';
import { OrderUncheckedCreateWithoutOrderItemsInputObjectSchema } from './OrderUncheckedCreateWithoutOrderItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderCreateOrConnectWithoutOrderItemsInput> = z
  .object({
    where: z.lazy(() => OrderWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => OrderCreateWithoutOrderItemsInputObjectSchema),
      z.lazy(() => OrderUncheckedCreateWithoutOrderItemsInputObjectSchema),
    ]),
  })
  .strict();

export const OrderCreateOrConnectWithoutOrderItemsInputObjectSchema = Schema;
