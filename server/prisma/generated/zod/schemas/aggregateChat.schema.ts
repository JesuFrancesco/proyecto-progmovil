import { z } from 'zod';
import { ChatOrderByWithRelationInputObjectSchema } from './objects/ChatOrderByWithRelationInput.schema';
import { ChatWhereInputObjectSchema } from './objects/ChatWhereInput.schema';
import { ChatWhereUniqueInputObjectSchema } from './objects/ChatWhereUniqueInput.schema';
import { ChatCountAggregateInputObjectSchema } from './objects/ChatCountAggregateInput.schema';
import { ChatMinAggregateInputObjectSchema } from './objects/ChatMinAggregateInput.schema';
import { ChatMaxAggregateInputObjectSchema } from './objects/ChatMaxAggregateInput.schema';
import { ChatAvgAggregateInputObjectSchema } from './objects/ChatAvgAggregateInput.schema';
import { ChatSumAggregateInputObjectSchema } from './objects/ChatSumAggregateInput.schema';

export const ChatAggregateSchema = z.object({
  orderBy: z
    .union([
      ChatOrderByWithRelationInputObjectSchema,
      ChatOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ChatWhereInputObjectSchema.optional(),
  cursor: ChatWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ChatCountAggregateInputObjectSchema])
    .optional(),
  _min: ChatMinAggregateInputObjectSchema.optional(),
  _max: ChatMaxAggregateInputObjectSchema.optional(),
  _avg: ChatAvgAggregateInputObjectSchema.optional(),
  _sum: ChatSumAggregateInputObjectSchema.optional(),
});
