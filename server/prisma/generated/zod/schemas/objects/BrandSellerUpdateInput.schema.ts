import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { CountryUpdateOneRequiredWithoutBrandSellersNestedInputObjectSchema } from './CountryUpdateOneRequiredWithoutBrandSellersNestedInput.schema';
import { ProductUpdateManyWithoutBrandSellerNestedInputObjectSchema } from './ProductUpdateManyWithoutBrandSellerNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BrandSellerUpdateInput> = z
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
    products: z
      .lazy(() => ProductUpdateManyWithoutBrandSellerNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const BrandSellerUpdateInputObjectSchema = Schema;
