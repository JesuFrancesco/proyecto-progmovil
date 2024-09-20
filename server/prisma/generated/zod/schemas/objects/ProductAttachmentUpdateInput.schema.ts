import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ProductUpdateOneRequiredWithoutProductAttachmentsNestedInputObjectSchema } from './ProductUpdateOneRequiredWithoutProductAttachmentsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductAttachmentUpdateInput> = z
  .object({
    imageUrl: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    product: z
      .lazy(
        () =>
          ProductUpdateOneRequiredWithoutProductAttachmentsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ProductAttachmentUpdateInputObjectSchema = Schema;
