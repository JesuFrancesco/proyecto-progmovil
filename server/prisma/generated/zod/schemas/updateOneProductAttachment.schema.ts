import { z } from 'zod';
import { ProductAttachmentUpdateInputObjectSchema } from './objects/ProductAttachmentUpdateInput.schema';
import { ProductAttachmentUncheckedUpdateInputObjectSchema } from './objects/ProductAttachmentUncheckedUpdateInput.schema';
import { ProductAttachmentWhereUniqueInputObjectSchema } from './objects/ProductAttachmentWhereUniqueInput.schema';

export const ProductAttachmentUpdateOneSchema = z.object({
  data: z.union([
    ProductAttachmentUpdateInputObjectSchema,
    ProductAttachmentUncheckedUpdateInputObjectSchema,
  ]),
  where: ProductAttachmentWhereUniqueInputObjectSchema,
});
