import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DistritoUpdateOneWithoutUsersNestedInputObjectSchema } from './DistritoUpdateOneWithoutUsersNestedInput.schema';
import { ProvinciaUpdateOneWithoutUsersNestedInputObjectSchema } from './ProvinciaUpdateOneWithoutUsersNestedInput.schema';
import { DepartmentoUpdateOneWithoutUsersNestedInputObjectSchema } from './DepartmentoUpdateOneWithoutUsersNestedInput.schema';
import { AccountUpdateOneRequiredWithoutUserNestedInputObjectSchema } from './AccountUpdateOneRequiredWithoutUserNestedInput.schema';
import { ShoppingCartUpdateManyWithoutUserNestedInputObjectSchema } from './ShoppingCartUpdateManyWithoutUserNestedInput.schema';
import { WishlistUpdateManyWithoutUserNestedInputObjectSchema } from './WishlistUpdateManyWithoutUserNestedInput.schema';
import { OrderUpdateManyWithoutUserNestedInputObjectSchema } from './OrderUpdateManyWithoutUserNestedInput.schema';
import { ProductRatingUpdateManyWithoutUserNestedInputObjectSchema } from './ProductRatingUpdateManyWithoutUserNestedInput.schema';
import { ProductQuestionUpdateManyWithoutUserNestedInputObjectSchema } from './ProductQuestionUpdateManyWithoutUserNestedInput.schema';
import { UserNotificationUpdateManyWithoutUserNestedInputObjectSchema } from './UserNotificationUpdateManyWithoutUserNestedInput.schema';
import { ChatParticipantUpdateManyWithoutUserNestedInputObjectSchema } from './ChatParticipantUpdateManyWithoutUserNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateInput> = z
  .object({
    referenceAddress: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    distrito: z
      .lazy(() => DistritoUpdateOneWithoutUsersNestedInputObjectSchema)
      .optional(),
    provincia: z
      .lazy(() => ProvinciaUpdateOneWithoutUsersNestedInputObjectSchema)
      .optional(),
    departmento: z
      .lazy(() => DepartmentoUpdateOneWithoutUsersNestedInputObjectSchema)
      .optional(),
    account: z
      .lazy(() => AccountUpdateOneRequiredWithoutUserNestedInputObjectSchema)
      .optional(),
    shoppingCarts: z
      .lazy(() => ShoppingCartUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    wishlists: z
      .lazy(() => WishlistUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    orders: z
      .lazy(() => OrderUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    productRatings: z
      .lazy(() => ProductRatingUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    productQuestions: z
      .lazy(() => ProductQuestionUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    userNotifications: z
      .lazy(() => UserNotificationUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    chatParticipants: z
      .lazy(() => ChatParticipantUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserUpdateInputObjectSchema = Schema;
