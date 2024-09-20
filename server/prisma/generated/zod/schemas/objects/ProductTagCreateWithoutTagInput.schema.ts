import { z } from 'zod';
import { ProductCreateNestedOneWithoutProductTagsInputObjectSchema } from './ProductCreateNestedOneWithoutProductTagsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductTagCreateWithoutTagInput> = z
  .object({
    product: z.lazy(
      () => ProductCreateNestedOneWithoutProductTagsInputObjectSchema,
    ),
  })
  .strict();

export const ProductTagCreateWithoutTagInputObjectSchema = Schema;
