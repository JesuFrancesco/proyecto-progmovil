import { z } from 'zod';
import { OrderItemUpdateInputObjectSchema } from './objects/OrderItemUpdateInput.schema';
import { OrderItemUncheckedUpdateInputObjectSchema } from './objects/OrderItemUncheckedUpdateInput.schema';
import { OrderItemWhereUniqueInputObjectSchema } from './objects/OrderItemWhereUniqueInput.schema';

export const OrderItemUpdateOneSchema = z.object({
  data: z.union([
    OrderItemUpdateInputObjectSchema,
    OrderItemUncheckedUpdateInputObjectSchema,
  ]),
  where: OrderItemWhereUniqueInputObjectSchema,
});
