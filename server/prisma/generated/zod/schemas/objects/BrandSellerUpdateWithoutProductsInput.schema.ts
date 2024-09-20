import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { CountryUpdateOneRequiredWithoutBrandSellersNestedInputObjectSchema } from './CountryUpdateOneRequiredWithoutBrandSellersNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BrandSellerUpdateWithoutProductsInput> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    countryOrigin: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    referenceLocation: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    country: z
      .lazy(
        () =>
          CountryUpdateOneRequiredWithoutBrandSellersNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const BrandSellerUpdateWithoutProductsInputObjectSchema = Schema;
