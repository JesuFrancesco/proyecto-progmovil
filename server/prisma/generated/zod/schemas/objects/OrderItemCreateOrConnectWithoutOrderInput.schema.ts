import { z } from 'zod';
import { OrderItemWhereUniqueInputObjectSchema } from './OrderItemWhereUniqueInput.schema';
import { OrderItemCreateWithoutOrderInputObjectSchema } from './OrderItemCreateWithoutOrderInput.schema';
import { OrderItemUncheckedCreateWithoutOrderInputObjectSchema } from './OrderItemUncheckedCreateWithoutOrderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderItemCreateOrConnectWithoutOrderInput> = z
  .object({
    where: z.lazy(() => OrderItemWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => OrderItemCreateWithoutOrderInputObjectSchema),
      z.lazy(() => OrderItemUncheckedCreateWithoutOrderInputObjectSchema),
    ]),
  })
  .strict();

export const OrderItemCreateOrConnectWithoutOrderInputObjectSchema = Schema;
