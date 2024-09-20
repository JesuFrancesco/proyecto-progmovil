import { z } from 'zod';
import { ProductUpdateOneRequiredWithoutProductTagsNestedInputObjectSchema } from './ProductUpdateOneRequiredWithoutProductTagsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductTagUpdateWithoutTagInput> = z
  .object({
    product: z
      .lazy(
        () => ProductUpdateOneRequiredWithoutProductTagsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ProductTagUpdateWithoutTagInputObjectSchema = Schema;
