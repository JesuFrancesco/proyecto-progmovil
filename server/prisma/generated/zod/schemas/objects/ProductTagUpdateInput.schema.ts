import { z } from 'zod';
import { TagUpdateOneRequiredWithoutProductTagsNestedInputObjectSchema } from './TagUpdateOneRequiredWithoutProductTagsNestedInput.schema';
import { ProductUpdateOneRequiredWithoutProductTagsNestedInputObjectSchema } from './ProductUpdateOneRequiredWithoutProductTagsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductTagUpdateInput> = z
  .object({
    tag: z
      .lazy(() => TagUpdateOneRequiredWithoutProductTagsNestedInputObjectSchema)
      .optional(),
    product: z
      .lazy(
        () => ProductUpdateOneRequiredWithoutProductTagsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ProductTagUpdateInputObjectSchema = Schema;
