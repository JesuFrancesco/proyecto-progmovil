import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { OrderItemListRelationFilterObjectSchema } from './OrderItemListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => OrderWhereInputObjectSchema),
        z.lazy(() => OrderWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => OrderWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => OrderWhereInputObjectSchema),
        z.lazy(() => OrderWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    totalPrice: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    status: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    userId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    user: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    orderItems: z
      .lazy(() => OrderItemListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const OrderWhereInputObjectSchema = Schema;
