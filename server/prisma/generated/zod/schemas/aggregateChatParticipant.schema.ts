import { z } from 'zod';
import { ChatParticipantOrderByWithRelationInputObjectSchema } from './objects/ChatParticipantOrderByWithRelationInput.schema';
import { ChatParticipantWhereInputObjectSchema } from './objects/ChatParticipantWhereInput.schema';
import { ChatParticipantWhereUniqueInputObjectSchema } from './objects/ChatParticipantWhereUniqueInput.schema';
import { ChatParticipantCountAggregateInputObjectSchema } from './objects/ChatParticipantCountAggregateInput.schema';
import { ChatParticipantMinAggregateInputObjectSchema } from './objects/ChatParticipantMinAggregateInput.schema';
import { ChatParticipantMaxAggregateInputObjectSchema } from './objects/ChatParticipantMaxAggregateInput.schema';
import { ChatParticipantAvgAggregateInputObjectSchema } from './objects/ChatParticipantAvgAggregateInput.schema';
import { ChatParticipantSumAggregateInputObjectSchema } from './objects/ChatParticipantSumAggregateInput.schema';

export const ChatParticipantAggregateSchema = z.object({
  orderBy: z
    .union([
      ChatParticipantOrderByWithRelationInputObjectSchema,
      ChatParticipantOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ChatParticipantWhereInputObjectSchema.optional(),
  cursor: ChatParticipantWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ChatParticipantCountAggregateInputObjectSchema])
    .optional(),
  _min: ChatParticipantMinAggregateInputObjectSchema.optional(),
  _max: ChatParticipantMaxAggregateInputObjectSchema.optional(),
  _avg: ChatParticipantAvgAggregateInputObjectSchema.optional(),
  _sum: ChatParticipantSumAggregateInputObjectSchema.optional(),
});
