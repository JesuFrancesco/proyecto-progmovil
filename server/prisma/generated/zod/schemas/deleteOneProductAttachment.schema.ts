import { z } from 'zod';
import { ProductAttachmentWhereUniqueInputObjectSchema } from './objects/ProductAttachmentWhereUniqueInput.schema';

export const ProductAttachmentDeleteOneSchema = z.object({
  where: ProductAttachmentWhereUniqueInputObjectSchema,
});
