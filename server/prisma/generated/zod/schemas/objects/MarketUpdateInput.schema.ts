import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { AccountUpdateOneRequiredWithoutMarketsNestedInputObjectSchema } from './AccountUpdateOneRequiredWithoutMarketsNestedInput.schema';
import { MarketProductUpdateManyWithoutMarketNestedInputObjectSchema } from './MarketProductUpdateManyWithoutMarketNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketUpdateInput> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    contactEmail: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    contactPhone: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    account: z
      .lazy(() => AccountUpdateOneRequiredWithoutMarketsNestedInputObjectSchema)
      .optional(),
    marketProducts: z
      .lazy(() => MarketProductUpdateManyWithoutMarketNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const MarketUpdateInputObjectSchema = Schema;
