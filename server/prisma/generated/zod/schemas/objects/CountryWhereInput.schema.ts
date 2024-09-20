import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { BrandSellerListRelationFilterObjectSchema } from './BrandSellerListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CountryWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => CountryWhereInputObjectSchema),
        z.lazy(() => CountryWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => CountryWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => CountryWhereInputObjectSchema),
        z.lazy(() => CountryWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    code: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    brandSellers: z
      .lazy(() => BrandSellerListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const CountryWhereInputObjectSchema = Schema;
