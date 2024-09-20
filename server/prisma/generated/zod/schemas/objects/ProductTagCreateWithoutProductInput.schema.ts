import { z } from 'zod';
import { TagCreateNestedOneWithoutProductTagsInputObjectSchema } from './TagCreateNestedOneWithoutProductTagsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductTagCreateWithoutProductInput> = z
  .object({
    tag: z.lazy(() => TagCreateNestedOneWithoutProductTagsInputObjectSchema),
  })
  .strict();

export const ProductTagCreateWithoutProductInputObjectSchema = Schema;
