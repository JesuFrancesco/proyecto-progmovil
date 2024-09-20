import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { MarketUncheckedUpdateManyWithoutAccountNestedInputObjectSchema } from './MarketUncheckedUpdateManyWithoutAccountNestedInput.schema';
import { MessageUncheckedUpdateManyWithoutAccountNestedInputObjectSchema } from './MessageUncheckedUpdateManyWithoutAccountNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountUncheckedUpdateWithoutUserInput> = z
  .object({
    id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
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
    markets: z
      .lazy(
        () => MarketUncheckedUpdateManyWithoutAccountNestedInputObjectSchema,
      )
      .optional(),
    messages: z
      .lazy(
        () => MessageUncheckedUpdateManyWithoutAccountNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const AccountUncheckedUpdateWithoutUserInputObjectSchema = Schema;
