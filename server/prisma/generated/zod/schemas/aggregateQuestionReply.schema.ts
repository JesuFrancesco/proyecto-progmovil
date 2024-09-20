import { z } from 'zod';
import { QuestionReplyOrderByWithRelationInputObjectSchema } from './objects/QuestionReplyOrderByWithRelationInput.schema';
import { QuestionReplyWhereInputObjectSchema } from './objects/QuestionReplyWhereInput.schema';
import { QuestionReplyWhereUniqueInputObjectSchema } from './objects/QuestionReplyWhereUniqueInput.schema';
import { QuestionReplyCountAggregateInputObjectSchema } from './objects/QuestionReplyCountAggregateInput.schema';
import { QuestionReplyMinAggregateInputObjectSchema } from './objects/QuestionReplyMinAggregateInput.schema';
import { QuestionReplyMaxAggregateInputObjectSchema } from './objects/QuestionReplyMaxAggregateInput.schema';
import { QuestionReplyAvgAggregateInputObjectSchema } from './objects/QuestionReplyAvgAggregateInput.schema';
import { QuestionReplySumAggregateInputObjectSchema } from './objects/QuestionReplySumAggregateInput.schema';

export const QuestionReplyAggregateSchema = z.object({
  orderBy: z
    .union([
      QuestionReplyOrderByWithRelationInputObjectSchema,
      QuestionReplyOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: QuestionReplyWhereInputObjectSchema.optional(),
  cursor: QuestionReplyWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), QuestionReplyCountAggregateInputObjectSchema])
    .optional(),
  _min: QuestionReplyMinAggregateInputObjectSchema.optional(),
  _max: QuestionReplyMaxAggregateInputObjectSchema.optional(),
  _avg: QuestionReplyAvgAggregateInputObjectSchema.optional(),
  _sum: QuestionReplySumAggregateInputObjectSchema.optional(),
});
