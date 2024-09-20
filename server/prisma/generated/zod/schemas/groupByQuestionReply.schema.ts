import { z } from 'zod';
import { QuestionReplyWhereInputObjectSchema } from './objects/QuestionReplyWhereInput.schema';
import { QuestionReplyOrderByWithAggregationInputObjectSchema } from './objects/QuestionReplyOrderByWithAggregationInput.schema';
import { QuestionReplyScalarWhereWithAggregatesInputObjectSchema } from './objects/QuestionReplyScalarWhereWithAggregatesInput.schema';
import { QuestionReplyScalarFieldEnumSchema } from './enums/QuestionReplyScalarFieldEnum.schema';

export const QuestionReplyGroupBySchema = z.object({
  where: QuestionReplyWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      QuestionReplyOrderByWithAggregationInputObjectSchema,
      QuestionReplyOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: QuestionReplyScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(QuestionReplyScalarFieldEnumSchema),
});
