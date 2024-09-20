import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { UserUpdateOneWithoutAccountNestedInputObjectSchema } from './UserUpdateOneWithoutAccountNestedInput.schema';
import { MarketUpdateManyWithoutAccountNestedInputObjectSchema } from './MarketUpdateManyWithoutAccountNestedInput.schema';
import { MessageUpdateManyWithoutAccountNestedInputObjectSchema } from './MessageUpdateManyWithoutAccountNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountUpdateInput> = z
  .object({
    email: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    role: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    password: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    phone: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    user: z
      .lazy(() => UserUpdateOneWithoutAccountNestedInputObjectSchema)
      .optional(),
    markets: z
      .lazy(() => MarketUpdateManyWithoutAccountNestedInputObjectSchema)
      .optional(),
    messages: z
      .lazy(() => MessageUpdateManyWithoutAccountNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const AccountUpdateInputObjectSchema = Schema;
