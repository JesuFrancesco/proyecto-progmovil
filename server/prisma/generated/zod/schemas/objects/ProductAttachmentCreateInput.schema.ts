import { z } from 'zod';
import { ProductCreateNestedOneWithoutProductAttachmentsInputObjectSchema } from './ProductCreateNestedOneWithoutProductAttachmentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductAttachmentCreateInput> = z
  .object({
    imageUrl: z.string(),
    product: z.lazy(
      () => ProductCreateNestedOneWithoutProductAttachmentsInputObjectSchema,
    ),
  })
  .strict();

export const ProductAttachmentCreateInputObjectSchema = Schema;
