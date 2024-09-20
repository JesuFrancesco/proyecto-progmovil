import { z } from 'zod';
import { DistritoCreateNestedOneWithoutUsersInputObjectSchema } from './DistritoCreateNestedOneWithoutUsersInput.schema';
import { ProvinciaCreateNestedOneWithoutUsersInputObjectSchema } from './ProvinciaCreateNestedOneWithoutUsersInput.schema';
import { DepartmentoCreateNestedOneWithoutUsersInputObjectSchema } from './DepartmentoCreateNestedOneWithoutUsersInput.schema';
import { AccountCreateNestedOneWithoutUserInputObjectSchema } from './AccountCreateNestedOneWithoutUserInput.schema';
import { WishlistCreateNestedManyWithoutUserInputObjectSchema } from './WishlistCreateNestedManyWithoutUserInput.schema';
import { OrderCreateNestedManyWithoutUserInputObjectSchema } from './OrderCreateNestedManyWithoutUserInput.schema';
import { ProductRatingCreateNestedManyWithoutUserInputObjectSchema } from './ProductRatingCreateNestedManyWithoutUserInput.schema';
import { ProductQuestionCreateNestedManyWithoutUserInputObjectSchema } from './ProductQuestionCreateNestedManyWithoutUserInput.schema';
import { UserNotificationCreateNestedManyWithoutUserInputObjectSchema } from './UserNotificationCreateNestedManyWithoutUserInput.schema';
import { ChatParticipantCreateNestedManyWithoutUserInputObjectSchema } from './ChatParticipantCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateWithoutShoppingCartsInput> = z
  .object({
    referenceAddress: z.string().optional().nullable(),
    distrito: z
      .lazy(() => DistritoCreateNestedOneWithoutUsersInputObjectSchema)
      .optional(),
    provincia: z
      .lazy(() => ProvinciaCreateNestedOneWithoutUsersInputObjectSchema)
      .optional(),
    departmento: z
      .lazy(() => DepartmentoCreateNestedOneWithoutUsersInputObjectSchema)
      .optional(),
    account: z.lazy(() => AccountCreateNestedOneWithoutUserInputObjectSchema),
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

export const UserCreateWithoutShoppingCartsInputObjectSchema = Schema;
