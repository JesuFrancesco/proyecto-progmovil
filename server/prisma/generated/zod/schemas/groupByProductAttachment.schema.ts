import { z } from 'zod';
import { ProductAttachmentWhereInputObjectSchema } from './objects/ProductAttachmentWhereInput.schema';
import { ProductAttachmentOrderByWithAggregationInputObjectSchema } from './objects/ProductAttachmentOrderByWithAggregationInput.schema';
import { ProductAttachmentScalarWhereWithAggregatesInputObjectSchema } from './objects/ProductAttachmentScalarWhereWithAggregatesInput.schema';
import { ProductAttachmentScalarFieldEnumSchema } from './enums/ProductAttachmentScalarFieldEnum.schema';

export const ProductAttachmentGroupBySchema = z.object({
  where: ProductAttachmentWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ProductAttachmentOrderByWithAggregationInputObjectSchema,
      ProductAttachmentOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having:
    ProductAttachmentScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ProductAttachmentScalarFieldEnumSchema),
});
