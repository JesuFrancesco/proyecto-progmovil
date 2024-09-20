import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { MarketProductUpdateManyWithoutMarketNestedInputObjectSchema } from './MarketProductUpdateManyWithoutMarketNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketUpdateWithoutAccountInput> = z
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
    marketProducts: z
      .lazy(() => MarketProductUpdateManyWithoutMarketNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const MarketUpdateWithoutAccountInputObjectSchema = Schema;
