import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductAttachmentScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ProductAttachmentScalarWhereInputObjectSchema),
        z.lazy(() => ProductAttachmentScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ProductAttachmentScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ProductAttachmentScalarWhereInputObjectSchema),
        z.lazy(() => ProductAttachmentScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    imageUrl: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    productId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
  })
  .strict();

export const ProductAttachmentScalarWhereInputObjectSchema = Schema;
