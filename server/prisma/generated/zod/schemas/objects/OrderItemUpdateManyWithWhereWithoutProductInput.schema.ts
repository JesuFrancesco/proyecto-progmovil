import { z } from 'zod';
import { OrderItemScalarWhereInputObjectSchema } from './OrderItemScalarWhereInput.schema';
import { OrderItemUpdateManyMutationInputObjectSchema } from './OrderItemUpdateManyMutationInput.schema';
import { OrderItemUncheckedUpdateManyWithoutOrderItemsInputObjectSchema } from './OrderItemUncheckedUpdateManyWithoutOrderItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderItemUpdateManyWithWhereWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => OrderItemScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => OrderItemUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => OrderItemUncheckedUpdateManyWithoutOrderItemsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const OrderItemUpdateManyWithWhereWithoutProductInputObjectSchema =
  Schema;
