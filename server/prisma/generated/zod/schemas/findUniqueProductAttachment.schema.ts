import { z } from 'zod';
import { ProductAttachmentWhereUniqueInputObjectSchema } from './objects/ProductAttachmentWhereUniqueInput.schema';

export const ProductAttachmentFindUniqueSchema = z.object({
  where: ProductAttachmentWhereUniqueInputObjectSchema,
});
