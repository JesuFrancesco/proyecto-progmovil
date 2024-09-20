import { z } from 'zod';
import { OrderItemWhereUniqueInputObjectSchema } from './OrderItemWhereUniqueInput.schema';
import { OrderItemUpdateWithoutProductInputObjectSchema } from './OrderItemUpdateWithoutProductInput.schema';
import { OrderItemUncheckedUpdateWithoutProductInputObjectSchema } from './OrderItemUncheckedUpdateWithoutProductInput.schema';
import { OrderItemCreateWithoutProductInputObjectSchema } from './OrderItemCreateWithoutProductInput.schema';
import { OrderItemUncheckedCreateWithoutProductInputObjectSchema } from './OrderItemUncheckedCreateWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderItemUpsertWithWhereUniqueWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => OrderItemWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => OrderItemUpdateWithoutProductInputObjectSchema),
        z.lazy(() => OrderItemUncheckedUpdateWithoutProductInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => OrderItemCreateWithoutProductInputObjectSchema),
        z.lazy(() => OrderItemUncheckedCreateWithoutProductInputObjectSchema),
      ]),
    })
    .strict();

export const OrderItemUpsertWithWhereUniqueWithoutProductInputObjectSchema =
  Schema;
