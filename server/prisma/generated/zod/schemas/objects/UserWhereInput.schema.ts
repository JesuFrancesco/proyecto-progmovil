import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DistritoRelationFilterObjectSchema } from './DistritoRelationFilter.schema';
import { DistritoWhereInputObjectSchema } from './DistritoWhereInput.schema';
import { ProvinciaRelationFilterObjectSchema } from './ProvinciaRelationFilter.schema';
import { ProvinciaWhereInputObjectSchema } from './ProvinciaWhereInput.schema';
import { DepartmentoRelationFilterObjectSchema } from './DepartmentoRelationFilter.schema';
import { DepartmentoWhereInputObjectSchema } from './DepartmentoWhereInput.schema';
import { AccountRelationFilterObjectSchema } from './AccountRelationFilter.schema';
import { AccountWhereInputObjectSchema } from './AccountWhereInput.schema';
import { ShoppingCartListRelationFilterObjectSchema } from './ShoppingCartListRelationFilter.schema';
import { WishlistListRelationFilterObjectSchema } from './WishlistListRelationFilter.schema';
import { OrderListRelationFilterObjectSchema } from './OrderListRelationFilter.schema';
import { ProductRatingListRelationFilterObjectSchema } from './ProductRatingListRelationFilter.schema';
import { ProductQuestionListRelationFilterObjectSchema } from './ProductQuestionListRelationFilter.schema';
import { UserNotificationListRelationFilterObjectSchema } from './UserNotificationListRelationFilter.schema';
import { ChatParticipantListRelationFilterObjectSchema } from './ChatParticipantListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => UserWhereInputObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UserWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UserWhereInputObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    referenceAddress: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    distritoId: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    provinciaId: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    departamentoId: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    accountId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    distrito: z
      .union([
        z.lazy(() => DistritoRelationFilterObjectSchema),
        z.lazy(() => DistritoWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    provincia: z
      .union([
        z.lazy(() => ProvinciaRelationFilterObjectSchema),
        z.lazy(() => ProvinciaWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    departmento: z
      .union([
        z.lazy(() => DepartmentoRelationFilterObjectSchema),
        z.lazy(() => DepartmentoWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    account: z
      .union([
        z.lazy(() => AccountRelationFilterObjectSchema),
        z.lazy(() => AccountWhereInputObjectSchema),
      ])
      .optional(),
    shoppingCarts: z
      .lazy(() => ShoppingCartListRelationFilterObjectSchema)
      .optional(),
    wishlists: z.lazy(() => WishlistListRelationFilterObjectSchema).optional(),
    orders: z.lazy(() => OrderListRelationFilterObjectSchema).optional(),
    productRatings: z
      .lazy(() => ProductRatingListRelationFilterObjectSchema)
      .optional(),
    productQuestions: z
      .lazy(() => ProductQuestionListRelationFilterObjectSchema)
      .optional(),
    userNotifications: z
      .lazy(() => UserNotificationListRelationFilterObjectSchema)
      .optional(),
    chatParticipants: z
      .lazy(() => ChatParticipantListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const UserWhereInputObjectSchema = Schema;
