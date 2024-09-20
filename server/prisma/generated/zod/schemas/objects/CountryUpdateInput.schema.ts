import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BrandSellerUpdateManyWithoutCountryNestedInputObjectSchema } from './BrandSellerUpdateManyWithoutCountryNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CountryUpdateInput> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    code: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    brandSellers: z
      .lazy(() => BrandSellerUpdateManyWithoutCountryNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const CountryUpdateInputObjectSchema = Schema;
