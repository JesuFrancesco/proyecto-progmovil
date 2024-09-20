import { z } from 'zod';
import { ChatMessageOrderByWithRelationInputObjectSchema } from './objects/ChatMessageOrderByWithRelationInput.schema';
import { ChatMessageWhereInputObjectSchema } from './objects/ChatMessageWhereInput.schema';
import { ChatMessageWhereUniqueInputObjectSchema } from './objects/ChatMessageWhereUniqueInput.schema';
import { ChatMessageCountAggregateInputObjectSchema } from './objects/ChatMessageCountAggregateInput.schema';
import { ChatMessageMinAggregateInputObjectSchema } from './objects/ChatMessageMinAggregateInput.schema';
import { ChatMessageMaxAggregateInputObjectSchema } from './objects/ChatMessageMaxAggregateInput.schema';
import { ChatMessageAvgAggregateInputObjectSchema } from './objects/ChatMessageAvgAggregateInput.schema';
import { ChatMessageSumAggregateInputObjectSchema } from './objects/ChatMessageSumAggregateInput.schema';

export const ChatMessageAggregateSchema = z.object({
  orderBy: z
    .union([
      ChatMessageOrderByWithRelationInputObjectSchema,
      ChatMessageOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ChatMessageWhereInputObjectSchema.optional(),
  cursor: ChatMessageWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ChatMessageCountAggregateInputObjectSchema])
    .optional(),
  _min: ChatMessageMinAggregateInputObjectSchema.optional(),
  _max: ChatMessageMaxAggregateInputObjectSchema.optional(),
  _avg: ChatMessageAvgAggregateInputObjectSchema.optional(),
  _sum: ChatMessageSumAggregateInputObjectSchema.optional(),
});
