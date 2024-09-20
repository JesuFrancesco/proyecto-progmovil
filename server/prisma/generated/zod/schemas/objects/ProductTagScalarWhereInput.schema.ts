import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductTagScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ProductTagScalarWhereInputObjectSchema),
        z.lazy(() => ProductTagScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ProductTagScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ProductTagScalarWhereInputObjectSchema),
        z.lazy(() => ProductTagScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    categoryId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    productId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
  })
  .strict();

export const ProductTagScalarWhereInputObjectSchema = Schema;
