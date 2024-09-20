import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { TagRelationFilterObjectSchema } from './TagRelationFilter.schema';
import { TagWhereInputObjectSchema } from './TagWhereInput.schema';
import { ProductRelationFilterObjectSchema } from './ProductRelationFilter.schema';
import { ProductWhereInputObjectSchema } from './ProductWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductTagWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ProductTagWhereInputObjectSchema),
        z.lazy(() => ProductTagWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ProductTagWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ProductTagWhereInputObjectSchema),
        z.lazy(() => ProductTagWhereInputObjectSchema).array(),
      ])
      .optional(),
    categoryId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    productId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    tag: z
      .union([
        z.lazy(() => TagRelationFilterObjectSchema),
        z.lazy(() => TagWhereInputObjectSchema),
      ])
      .optional(),
    product: z
      .union([
        z.lazy(() => ProductRelationFilterObjectSchema),
        z.lazy(() => ProductWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ProductTagWhereInputObjectSchema = Schema;
