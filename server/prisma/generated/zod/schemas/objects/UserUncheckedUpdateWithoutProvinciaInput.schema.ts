import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { ShoppingCartUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './ShoppingCartUncheckedUpdateManyWithoutUserNestedInput.schema';
import { WishlistUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './WishlistUncheckedUpdateManyWithoutUserNestedInput.schema';
import { OrderUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './OrderUncheckedUpdateManyWithoutUserNestedInput.schema';
import { ProductRatingUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './ProductRatingUncheckedUpdateManyWithoutUserNestedInput.schema';
import { ProductQuestionUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './ProductQuestionUncheckedUpdateManyWithoutUserNestedInput.schema';
import { UserNotificationUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './UserNotificationUncheckedUpdateManyWithoutUserNestedInput.schema';
import { ChatParticipantUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './ChatParticipantUncheckedUpdateManyWithoutUserNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedUpdateWithoutProvinciaInput> = z
  .object({
    id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    referenceAddress: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    distritoId: z
      .union([
        z.number(),
        z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    departamentoId: z
      .union([
        z.number(),
        z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    accountId: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    shoppingCarts: z
      .lazy(
        () => ShoppingCartUncheckedUpdateManyWithoutUserNestedInputObjectSchema,
      )
      .optional(),
    wishlists: z
      .lazy(() => WishlistUncheckedUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    orders: z
      .lazy(() => OrderUncheckedUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    productRatings: z
      .lazy(
        () =>
          ProductRatingUncheckedUpdateManyWithoutUserNestedInputObjectSchema,
      )
      .optional(),
    productQuestions: z
      .lazy(
        () =>
          ProductQuestionUncheckedUpdateManyWithoutUserNestedInputObjectSchema,
      )
      .optional(),
    userNotifications: z
      .lazy(
        () =>
          UserNotificationUncheckedUpdateManyWithoutUserNestedInputObjectSchema,
      )
      .optional(),
    chatParticipants: z
      .lazy(
        () =>
          ChatParticipantUncheckedUpdateManyWithoutUserNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const UserUncheckedUpdateWithoutProvinciaInputObjectSchema = Schema;
