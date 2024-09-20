import { z } from 'zod';
import { ProductAttachmentWhereInputObjectSchema } from './ProductAttachmentWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductAttachmentListRelationFilter> = z
  .object({
    every: z.lazy(() => ProductAttachmentWhereInputObjectSchema).optional(),
    some: z.lazy(() => ProductAttachmentWhereInputObjectSchema).optional(),
    none: z.lazy(() => ProductAttachmentWhereInputObjectSchema).optional(),
  })
  .strict();

export const ProductAttachmentListRelationFilterObjectSchema = Schema;
