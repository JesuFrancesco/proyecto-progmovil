import { z } from 'zod';
import { OrderItemWhereUniqueInputObjectSchema } from './OrderItemWhereUniqueInput.schema';
import { OrderItemCreateWithoutProductInputObjectSchema } from './OrderItemCreateWithoutProductInput.schema';
import { OrderItemUncheckedCreateWithoutProductInputObjectSchema } from './OrderItemUncheckedCreateWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderItemCreateOrConnectWithoutProductInput> = z
  .object({
    where: z.lazy(() => OrderItemWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => OrderItemCreateWithoutProductInputObjectSchema),
      z.lazy(() => OrderItemUncheckedCreateWithoutProductInputObjectSchema),
    ]),
  })
  .strict();

export const OrderItemCreateOrConnectWithoutProductInputObjectSchema = Schema;
