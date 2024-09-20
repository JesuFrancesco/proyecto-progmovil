import { z } from 'zod';
import { ProductAttachmentOrderByWithRelationInputObjectSchema } from './objects/ProductAttachmentOrderByWithRelationInput.schema';
import { ProductAttachmentWhereInputObjectSchema } from './objects/ProductAttachmentWhereInput.schema';
import { ProductAttachmentWhereUniqueInputObjectSchema } from './objects/ProductAttachmentWhereUniqueInput.schema';
import { ProductAttachmentScalarFieldEnumSchema } from './enums/ProductAttachmentScalarFieldEnum.schema';

export const ProductAttachmentFindFirstSchema = z.object({
  orderBy: z
    .union([
      ProductAttachmentOrderByWithRelationInputObjectSchema,
      ProductAttachmentOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ProductAttachmentWhereInputObjectSchema.optional(),
  cursor: ProductAttachmentWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ProductAttachmentScalarFieldEnumSchema).optional(),
});
