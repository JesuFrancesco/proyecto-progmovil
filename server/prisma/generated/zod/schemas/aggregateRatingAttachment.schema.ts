import { z } from 'zod';
import { RatingAttachmentOrderByWithRelationInputObjectSchema } from './objects/RatingAttachmentOrderByWithRelationInput.schema';
import { RatingAttachmentWhereInputObjectSchema } from './objects/RatingAttachmentWhereInput.schema';
import { RatingAttachmentWhereUniqueInputObjectSchema } from './objects/RatingAttachmentWhereUniqueInput.schema';
import { RatingAttachmentCountAggregateInputObjectSchema } from './objects/RatingAttachmentCountAggregateInput.schema';
import { RatingAttachmentMinAggregateInputObjectSchema } from './objects/RatingAttachmentMinAggregateInput.schema';
import { RatingAttachmentMaxAggregateInputObjectSchema } from './objects/RatingAttachmentMaxAggregateInput.schema';
import { RatingAttachmentAvgAggregateInputObjectSchema } from './objects/RatingAttachmentAvgAggregateInput.schema';
import { RatingAttachmentSumAggregateInputObjectSchema } from './objects/RatingAttachmentSumAggregateInput.schema';

export const RatingAttachmentAggregateSchema = z.object({
  orderBy: z
    .union([
      RatingAttachmentOrderByWithRelationInputObjectSchema,
      RatingAttachmentOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: RatingAttachmentWhereInputObjectSchema.optional(),
  cursor: RatingAttachmentWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), RatingAttachmentCountAggregateInputObjectSchema])
    .optional(),
  _min: RatingAttachmentMinAggregateInputObjectSchema.optional(),
  _max: RatingAttachmentMaxAggregateInputObjectSchema.optional(),
  _avg: RatingAttachmentAvgAggregateInputObjectSchema.optional(),
  _sum: RatingAttachmentSumAggregateInputObjectSchema.optional(),
});
