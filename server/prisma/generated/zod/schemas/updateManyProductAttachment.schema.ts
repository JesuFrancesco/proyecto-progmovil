import { z } from 'zod';
import { ProductAttachmentUpdateManyMutationInputObjectSchema } from './objects/ProductAttachmentUpdateManyMutationInput.schema';
import { ProductAttachmentWhereInputObjectSchema } from './objects/ProductAttachmentWhereInput.schema';

export const ProductAttachmentUpdateManySchema = z.object({
  data: ProductAttachmentUpdateManyMutationInputObjectSchema,
  where: ProductAttachmentWhereInputObjectSchema.optional(),
});
