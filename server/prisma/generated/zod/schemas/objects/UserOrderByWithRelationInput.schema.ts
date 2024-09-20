import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { DistritoOrderByWithRelationInputObjectSchema } from './DistritoOrderByWithRelationInput.schema';
import { ProvinciaOrderByWithRelationInputObjectSchema } from './ProvinciaOrderByWithRelationInput.schema';
import { DepartmentoOrderByWithRelationInputObjectSchema } from './DepartmentoOrderByWithRelationInput.schema';
import { AccountOrderByWithRelationInputObjectSchema } from './AccountOrderByWithRelationInput.schema';
import { ShoppingCartOrderByRelationAggregateInputObjectSchema } from './ShoppingCartOrderByRelationAggregateInput.schema';
import { WishlistOrderByRelationAggregateInputObjectSchema } from './WishlistOrderByRelationAggregateInput.schema';
import { OrderOrderByRelationAggregateInputObjectSchema } from './OrderOrderByRelationAggregateInput.schema';
import { ProductRatingOrderByRelationAggregateInputObjectSchema } from './ProductRatingOrderByRelationAggregateInput.schema';
import { ProductQuestionOrderByRelationAggregateInputObjectSchema } from './ProductQuestionOrderByRelationAggregateInput.schema';
import { UserNotificationOrderByRelationAggregateInputObjectSchema } from './UserNotificationOrderByRelationAggregateInput.schema';
import { ChatParticipantOrderByRelationAggregateInputObjectSchema } from './ChatParticipantOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    referenceAddress: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    distritoId: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    provinciaId: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    departamentoId: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    accountId: z.lazy(() => SortOrderSchema).optional(),
    distrito: z
      .lazy(() => DistritoOrderByWithRelationInputObjectSchema)
      .optional(),
    provincia: z
      .lazy(() => ProvinciaOrderByWithRelationInputObjectSchema)
      .optional(),
    departmento: z
      .lazy(() => DepartmentoOrderByWithRelationInputObjectSchema)
      .optional(),
    account: z
      .lazy(() => AccountOrderByWithRelationInputObjectSchema)
      .optional(),
    shoppingCarts: z
      .lazy(() => ShoppingCartOrderByRelationAggregateInputObjectSchema)
      .optional(),
    wishlists: z
      .lazy(() => WishlistOrderByRelationAggregateInputObjectSchema)
      .optional(),
    orders: z
      .lazy(() => OrderOrderByRelationAggregateInputObjectSchema)
      .optional(),
    productRatings: z
      .lazy(() => ProductRatingOrderByRelationAggregateInputObjectSchema)
      .optional(),
    productQuestions: z
      .lazy(() => ProductQuestionOrderByRelationAggregateInputObjectSchema)
      .optional(),
    userNotifications: z
      .lazy(() => UserNotificationOrderByRelationAggregateInputObjectSchema)
      .optional(),
    chatParticipants: z
      .lazy(() => ChatParticipantOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserOrderByWithRelationInputObjectSchema = Schema;
