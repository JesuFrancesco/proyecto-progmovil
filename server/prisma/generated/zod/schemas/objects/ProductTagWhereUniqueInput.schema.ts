import { z } from 'zod';
import { ProductTagCategoryIdProductIdCompoundUniqueInputObjectSchema } from './ProductTagCategoryIdProductIdCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductTagWhereUniqueInput> = z
  .object({
    categoryId_productId: z
      .lazy(() => ProductTagCategoryIdProductIdCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProductTagWhereUniqueInputObjectSchema = Schema;
