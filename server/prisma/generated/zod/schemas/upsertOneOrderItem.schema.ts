import { z } from 'zod';
import { OrderItemWhereUniqueInputObjectSchema } from './objects/OrderItemWhereUniqueInput.schema';
import { OrderItemCreateInputObjectSchema } from './objects/OrderItemCreateInput.schema';
import { OrderItemUncheckedCreateInputObjectSchema } from './objects/OrderItemUncheckedCreateInput.schema';
import { OrderItemUpdateInputObjectSchema } from './objects/OrderItemUpdateInput.schema';
import { OrderItemUncheckedUpdateInputObjectSchema } from './objects/OrderItemUncheckedUpdateInput.schema';

export const OrderItemUpsertSchema = z.object({
  where: OrderItemWhereUniqueInputObjectSchema,
  create: z.union([
    OrderItemCreateInputObjectSchema,
    OrderItemUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    OrderItemUpdateInputObjectSchema,
    OrderItemUncheckedUpdateInputObjectSchema,
  ]),
});
