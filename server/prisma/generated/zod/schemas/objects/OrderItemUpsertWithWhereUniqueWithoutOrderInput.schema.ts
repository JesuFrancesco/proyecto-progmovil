import { z } from 'zod';
import { OrderItemWhereUniqueInputObjectSchema } from './OrderItemWhereUniqueInput.schema';
import { OrderItemUpdateWithoutOrderInputObjectSchema } from './OrderItemUpdateWithoutOrderInput.schema';
import { OrderItemUncheckedUpdateWithoutOrderInputObjectSchema } from './OrderItemUncheckedUpdateWithoutOrderInput.schema';
import { OrderItemCreateWithoutOrderInputObjectSchema } from './OrderItemCreateWithoutOrderInput.schema';
import { OrderItemUncheckedCreateWithoutOrderInputObjectSchema } from './OrderItemUncheckedCreateWithoutOrderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderItemUpsertWithWhereUniqueWithoutOrderInput> =
  z
    .object({
      where: z.lazy(() => OrderItemWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => OrderItemUpdateWithoutOrderInputObjectSchema),
        z.lazy(() => OrderItemUncheckedUpdateWithoutOrderInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => OrderItemCreateWithoutOrderInputObjectSchema),
        z.lazy(() => OrderItemUncheckedCreateWithoutOrderInputObjectSchema),
      ]),
    })
    .strict();

export const OrderItemUpsertWithWhereUniqueWithoutOrderInputObjectSchema =
  Schema;
