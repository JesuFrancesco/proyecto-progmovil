import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { CountryRelationFilterObjectSchema } from './CountryRelationFilter.schema';
import { CountryWhereInputObjectSchema } from './CountryWhereInput.schema';
import { ProductListRelationFilterObjectSchema } from './ProductListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BrandSellerWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => BrandSellerWhereInputObjectSchema),
        z.lazy(() => BrandSellerWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => BrandSellerWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => BrandSellerWhereInputObjectSchema),
        z.lazy(() => BrandSellerWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    countryOrigin: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    referenceLocation: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    countryId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    country: z
      .union([
        z.lazy(() => CountryRelationFilterObjectSchema),
        z.lazy(() => CountryWhereInputObjectSchema),
      ])
      .optional(),
    products: z.lazy(() => ProductListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const BrandSellerWhereInputObjectSchema = Schema;
