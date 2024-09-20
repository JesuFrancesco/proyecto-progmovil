import { z } from 'zod';
import { ProductAttachmentCreateInputObjectSchema } from './objects/ProductAttachmentCreateInput.schema';
import { ProductAttachmentUncheckedCreateInputObjectSchema } from './objects/ProductAttachmentUncheckedCreateInput.schema';

export const ProductAttachmentCreateOneSchema = z.object({
  data: z.union([
    ProductAttachmentCreateInputObjectSchema,
    ProductAttachmentUncheckedCreateInputObjectSchema,
  ]),
});
