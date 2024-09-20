import { z } from 'zod';
import { DistritoCreateNestedOneWithoutUsersInputObjectSchema } from './DistritoCreateNestedOneWithoutUsersInput.schema';
import { ProvinciaCreateNestedOneWithoutUsersInputObjectSchema } from './ProvinciaCreateNestedOneWithoutUsersInput.schema';
import { AccountCreateNestedOneWithoutUserInputObjectSchema } from './AccountCreateNestedOneWithoutUserInput.schema';
import { ShoppingCartCreateNestedManyWithoutUserInputObjectSchema } from './ShoppingCartCreateNestedManyWithoutUserInput.schema';
import { WishlistCreateNestedManyWithoutUserInputObjectSchema } from './WishlistCreateNestedManyWithoutUserInput.schema';
import { OrderCreateNestedManyWithoutUserInputObjectSchema } from './OrderCreateNestedManyWithoutUserInput.schema';
import { ProductRatingCreateNestedManyWithoutUserInputObjectSchema } from './ProductRatingCreateNestedManyWithoutUserInput.schema';
import { ProductQuestionCreateNestedManyWithoutUserInputObjectSchema } from './ProductQuestionCreateNestedManyWithoutUserInput.schema';
import { UserNotificationCreateNestedManyWithoutUserInputObjectSchema } from './UserNotificationCreateNestedManyWithoutUserInput.schema';
import { ChatParticipantCreateNestedManyWithoutUserInputObjectSchema } from './ChatParticipantCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateWithoutDepartmentoInput> = z
  .object({
    referenceAddress: z.string().optional().nullable(),
    distrito: z
      .lazy(() => DistritoCreateNestedOneWithoutUsersInputObjectSchema)
      .optional(),
    provincia: z
      .lazy(() => ProvinciaCreateNestedOneWithoutUsersInputObjectSchema)
      .optional(),
    account: z.lazy(() => AccountCreateNestedOneWithoutUserInputObjectSchema),
    shoppingCarts: z
      .lazy(() => ShoppingCartCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    wishlists: z
      .lazy(() => WishlistCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    orders: z
      .lazy(() => OrderCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    productRatings: z
      .lazy(() => ProductRatingCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    productQuestions: z
      .lazy(() => ProductQuestionCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    userNotifications: z
      .lazy(() => UserNotificationCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    chatParticipants: z
      .lazy(() => ChatParticipantCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserCreateWithoutDepartmentoInputObjectSchema = Schema;
