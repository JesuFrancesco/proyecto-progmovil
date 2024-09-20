import { z } from 'zod';
import { ChatParticipantWhereInputObjectSchema } from './objects/ChatParticipantWhereInput.schema';
import { ChatParticipantOrderByWithAggregationInputObjectSchema } from './objects/ChatParticipantOrderByWithAggregationInput.schema';
import { ChatParticipantScalarWhereWithAggregatesInputObjectSchema } from './objects/ChatParticipantScalarWhereWithAggregatesInput.schema';
import { ChatParticipantScalarFieldEnumSchema } from './enums/ChatParticipantScalarFieldEnum.schema';

export const ChatParticipantGroupBySchema = z.object({
  where: ChatParticipantWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ChatParticipantOrderByWithAggregationInputObjectSchema,
      ChatParticipantOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ChatParticipantScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ChatParticipantScalarFieldEnumSchema),
});
