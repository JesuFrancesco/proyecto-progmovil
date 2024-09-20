import { z } from 'zod';
import { RatingAttachmentWhereInputObjectSchema } from './objects/RatingAttachmentWhereInput.schema';
import { RatingAttachmentOrderByWithAggregationInputObjectSchema } from './objects/RatingAttachmentOrderByWithAggregationInput.schema';
import { RatingAttachmentScalarWhereWithAggregatesInputObjectSchema } from './objects/RatingAttachmentScalarWhereWithAggregatesInput.schema';
import { RatingAttachmentScalarFieldEnumSchema } from './enums/RatingAttachmentScalarFieldEnum.schema';

export const RatingAttachmentGroupBySchema = z.object({
  where: RatingAttachmentWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      RatingAttachmentOrderByWithAggregationInputObjectSchema,
      RatingAttachmentOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: RatingAttachmentScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(RatingAttachmentScalarFieldEnumSchema),
});
