import { z } from 'zod';
import { ShoppingCartUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './ShoppingCartUncheckedCreateNestedManyWithoutUserInput.schema';
import { OrderUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './OrderUncheckedCreateNestedManyWithoutUserInput.schema';
import { ProductRatingUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './ProductRatingUncheckedCreateNestedManyWithoutUserInput.schema';
import { ProductQuestionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './ProductQuestionUncheckedCreateNestedManyWithoutUserInput.schema';
import { UserNotificationUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './UserNotificationUncheckedCreateNestedManyWithoutUserInput.schema';
import { ChatParticipantUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './ChatParticipantUncheckedCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutWishlistsInput> = z
  .object({
    id: z.number().optional(),
    referenceAddress: z.string().optional().nullable(),
    distritoId: z.number().optional().nullable(),
    provinciaId: z.number().optional().nullable(),
    departamentoId: z.number().optional().nullable(),
    accountId: z.number(),
    shoppingCarts: z
      .lazy(
        () => ShoppingCartUncheckedCreateNestedManyWithoutUserInputObjectSchema,
      )
      .optional(),
    orders: z
      .lazy(() => OrderUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    productRatings: z
      .lazy(
        () =>
          ProductRatingUncheckedCreateNestedManyWithoutUserInputObjectSchema,
      )
      .optional(),
    productQuestions: z
      .lazy(
        () =>
          ProductQuestionUncheckedCreateNestedManyWithoutUserInputObjectSchema,
      )
      .optional(),
    userNotifications: z
      .lazy(
        () =>
          UserNotificationUncheckedCreateNestedManyWithoutUserInputObjectSchema,
      )
      .optional(),
    chatParticipants: z
      .lazy(
        () =>
          ChatParticipantUncheckedCreateNestedManyWithoutUserInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const UserUncheckedCreateWithoutWishlistsInputObjectSchema = Schema;
