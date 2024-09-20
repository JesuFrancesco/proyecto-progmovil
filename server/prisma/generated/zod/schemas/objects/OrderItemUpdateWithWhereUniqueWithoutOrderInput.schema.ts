import { z } from 'zod';
import { OrderItemWhereUniqueInputObjectSchema } from './OrderItemWhereUniqueInput.schema';
import { OrderItemUpdateWithoutOrderInputObjectSchema } from './OrderItemUpdateWithoutOrderInput.schema';
import { OrderItemUncheckedUpdateWithoutOrderInputObjectSchema } from './OrderItemUncheckedUpdateWithoutOrderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderItemUpdateWithWhereUniqueWithoutOrderInput> =
  z
    .object({
      where: z.lazy(() => OrderItemWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => OrderItemUpdateWithoutOrderInputObjectSchema),
        z.lazy(() => OrderItemUncheckedUpdateWithoutOrderInputObjectSchema),
      ]),
    })
    .strict();

export const OrderItemUpdateWithWhereUniqueWithoutOrderInputObjectSchema =
  Schema;
