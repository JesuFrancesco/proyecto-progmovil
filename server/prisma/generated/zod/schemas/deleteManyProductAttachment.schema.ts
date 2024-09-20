import { z } from 'zod';
import { ProductAttachmentWhereInputObjectSchema } from './objects/ProductAttachmentWhereInput.schema';

export const ProductAttachmentDeleteManySchema = z.object({
  where: ProductAttachmentWhereInputObjectSchema.optional(),
});
