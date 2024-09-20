import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BrandSellerScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => BrandSellerScalarWhereInputObjectSchema),
        z.lazy(() => BrandSellerScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => BrandSellerScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => BrandSellerScalarWhereInputObjectSchema),
        z.lazy(() => BrandSellerScalarWhereInputObjectSchema).array(),
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
  })
  .strict();

export const BrandSellerScalarWhereInputObjectSchema = Schema;
