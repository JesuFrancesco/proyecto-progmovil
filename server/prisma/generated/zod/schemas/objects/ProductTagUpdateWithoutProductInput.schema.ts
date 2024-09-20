import { z } from 'zod';
import { TagUpdateOneRequiredWithoutProductTagsNestedInputObjectSchema } from './TagUpdateOneRequiredWithoutProductTagsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductTagUpdateWithoutProductInput> = z
  .object({
    tag: z
      .lazy(() => TagUpdateOneRequiredWithoutProductTagsNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProductTagUpdateWithoutProductInputObjectSchema = Schema;
