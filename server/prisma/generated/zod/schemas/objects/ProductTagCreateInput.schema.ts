import { z } from 'zod';
import { TagCreateNestedOneWithoutProductTagsInputObjectSchema } from './TagCreateNestedOneWithoutProductTagsInput.schema';
import { ProductCreateNestedOneWithoutProductTagsInputObjectSchema } from './ProductCreateNestedOneWithoutProductTagsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductTagCreateInput> = z
  .object({
    tag: z.lazy(() => TagCreateNestedOneWithoutProductTagsInputObjectSchema),
    product: z.lazy(
      () => ProductCreateNestedOneWithoutProductTagsInputObjectSchema,
    ),
  })
  .strict();

export const ProductTagCreateInputObjectSchema = Schema;
