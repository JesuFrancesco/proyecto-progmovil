import { z } from 'zod';
import { ProductTagCreateNestedManyWithoutTagInputObjectSchema } from './ProductTagCreateNestedManyWithoutTagInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagCreateInput> = z
  .object({
    name: z.string(),
    productTags: z
      .lazy(() => ProductTagCreateNestedManyWithoutTagInputObjectSchema)
      .optional(),
  })
  .strict();

export const TagCreateInputObjectSchema = Schema;
