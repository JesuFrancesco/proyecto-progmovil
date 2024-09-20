import { z } from 'zod';
import { ProductAttachmentOrderByWithRelationInputObjectSchema } from './objects/ProductAttachmentOrderByWithRelationInput.schema';
import { ProductAttachmentWhereInputObjectSchema } from './objects/ProductAttachmentWhereInput.schema';
import { ProductAttachmentWhereUniqueInputObjectSchema } from './objects/ProductAttachmentWhereUniqueInput.schema';
import { ProductAttachmentCountAggregateInputObjectSchema } from './objects/ProductAttachmentCountAggregateInput.schema';
import { ProductAttachmentMinAggregateInputObjectSchema } from './objects/ProductAttachmentMinAggregateInput.schema';
import { ProductAttachmentMaxAggregateInputObjectSchema } from './objects/ProductAttachmentMaxAggregateInput.schema';
import { ProductAttachmentAvgAggregateInputObjectSchema } from './objects/ProductAttachmentAvgAggregateInput.schema';
import { ProductAttachmentSumAggregateInputObjectSchema } from './objects/ProductAttachmentSumAggregateInput.schema';

export const ProductAttachmentAggregateSchema = z.object({
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
  _count: z
    .union([z.literal(true), ProductAttachmentCountAggregateInputObjectSchema])
    .optional(),
  _min: ProductAttachmentMinAggregateInputObjectSchema.optional(),
  _max: ProductAttachmentMaxAggregateInputObjectSchema.optional(),
  _avg: ProductAttachmentAvgAggregateInputObjectSchema.optional(),
  _sum: ProductAttachmentSumAggregateInputObjectSchema.optional(),
});
