import { z } from 'zod';
import { OrderItemCreateInputObjectSchema } from './objects/OrderItemCreateInput.schema';
import { OrderItemUncheckedCreateInputObjectSchema } from './objects/OrderItemUncheckedCreateInput.schema';

export const OrderItemCreateOneSchema = z.object({
  data: z.union([
    OrderItemCreateInputObjectSchema,
    OrderItemUncheckedCreateInputObjectSchema,
  ]),
});
