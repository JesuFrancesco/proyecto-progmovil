import { z } from 'zod';
import { ProductAttachmentWhereUniqueInputObjectSchema } from './objects/ProductAttachmentWhereUniqueInput.schema';
import { ProductAttachmentCreateInputObjectSchema } from './objects/ProductAttachmentCreateInput.schema';
import { ProductAttachmentUncheckedCreateInputObjectSchema } from './objects/ProductAttachmentUncheckedCreateInput.schema';
import { ProductAttachmentUpdateInputObjectSchema } from './objects/ProductAttachmentUpdateInput.schema';
import { ProductAttachmentUncheckedUpdateInputObjectSchema } from './objects/ProductAttachmentUncheckedUpdateInput.schema';

export const ProductAttachmentUpsertSchema = z.object({
  where: ProductAttachmentWhereUniqueInputObjectSchema,
  create: z.union([
    ProductAttachmentCreateInputObjectSchema,
    ProductAttachmentUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ProductAttachmentUpdateInputObjectSchema,
    ProductAttachmentUncheckedUpdateInputObjectSchema,
  ]),
});
