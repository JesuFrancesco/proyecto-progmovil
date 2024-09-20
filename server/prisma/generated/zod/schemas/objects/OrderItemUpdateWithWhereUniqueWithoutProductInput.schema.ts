import { z } from 'zod';
import { OrderItemWhereUniqueInputObjectSchema } from './OrderItemWhereUniqueInput.schema';
import { OrderItemUpdateWithoutProductInputObjectSchema } from './OrderItemUpdateWithoutProductInput.schema';
import { OrderItemUncheckedUpdateWithoutProductInputObjectSchema } from './OrderItemUncheckedUpdateWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderItemUpdateWithWhereUniqueWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => OrderItemWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => OrderItemUpdateWithoutProductInputObjectSchema),
        z.lazy(() => OrderItemUncheckedUpdateWithoutProductInputObjectSchema),
      ]),
    })
    .strict();

export const OrderItemUpdateWithWhereUniqueWithoutProductInputObjectSchema =
  Schema;
