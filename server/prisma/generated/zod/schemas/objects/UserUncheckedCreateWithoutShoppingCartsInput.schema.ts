import { z } from 'zod';
import { WishlistUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './WishlistUncheckedCreateNestedManyWithoutUserInput.schema';
import { OrderUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './OrderUncheckedCreateNestedManyWithoutUserInput.schema';
import { ProductRatingUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './ProductRatingUncheckedCreateNestedManyWithoutUserInput.schema';
import { ProductQuestionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './ProductQuestionUncheckedCreateNestedManyWithoutUserInput.schema';
import { UserNotificationUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './UserNotificationUncheckedCreateNestedManyWithoutUserInput.schema';
import { ChatParticipantUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './ChatParticipantUncheckedCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutShoppingCartsInput> = z
  .object({
    id: z.number().optional(),
    referenceAddress: z.string().optional().nullable(),
    distritoId: z.number().optional().nullable(),
    provinciaId: z.number().optional().nullable(),
    departamentoId: z.number().optional().nullable(),
    accountId: z.number(),
    wishlists: z
      .lazy(() => WishlistUncheckedCreateNestedManyWithoutUserInputObjectSchema)
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

export const UserUncheckedCreateWithoutShoppingCartsInputObjectSchema = Schema;
