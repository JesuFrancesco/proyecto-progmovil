import { z } from 'zod';
import { OrderUpdateWithoutOrderItemsInputObjectSchema } from './OrderUpdateWithoutOrderItemsInput.schema';
import { OrderUncheckedUpdateWithoutOrderItemsInputObjectSchema } from './OrderUncheckedUpdateWithoutOrderItemsInput.schema';
import { OrderCreateWithoutOrderItemsInputObjectSchema } from './OrderCreateWithoutOrderItemsInput.schema';
import { OrderUncheckedCreateWithoutOrderItemsInputObjectSchema } from './OrderUncheckedCreateWithoutOrderItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderUpsertWithoutOrderItemsInput> = z
  .object({
    update: z.union([
      z.lazy(() => OrderUpdateWithoutOrderItemsInputObjectSchema),
      z.lazy(() => OrderUncheckedUpdateWithoutOrderItemsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => OrderCreateWithoutOrderItemsInputObjectSchema),
      z.lazy(() => OrderUncheckedCreateWithoutOrderItemsInputObjectSchema),
    ]),
  })
  .strict();

export const OrderUpsertWithoutOrderItemsInputObjectSchema = Schema;
