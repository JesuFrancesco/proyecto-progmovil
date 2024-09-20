import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ProductUpdateManyWithoutBrandSellerNestedInputObjectSchema } from './ProductUpdateManyWithoutBrandSellerNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BrandSellerUpdateWithoutCountryInput> = z
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
    products: z
      .lazy(() => ProductUpdateManyWithoutBrandSellerNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const BrandSellerUpdateWithoutCountryInputObjectSchema = Schema;
