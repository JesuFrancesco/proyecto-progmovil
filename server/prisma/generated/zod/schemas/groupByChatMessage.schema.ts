import { z } from 'zod';
import { ChatMessageWhereInputObjectSchema } from './objects/ChatMessageWhereInput.schema';
import { ChatMessageOrderByWithAggregationInputObjectSchema } from './objects/ChatMessageOrderByWithAggregationInput.schema';
import { ChatMessageScalarWhereWithAggregatesInputObjectSchema } from './objects/ChatMessageScalarWhereWithAggregatesInput.schema';
import { ChatMessageScalarFieldEnumSchema } from './enums/ChatMessageScalarFieldEnum.schema';

export const ChatMessageGroupBySchema = z.object({
  where: ChatMessageWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ChatMessageOrderByWithAggregationInputObjectSchema,
      ChatMessageOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ChatMessageScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ChatMessageScalarFieldEnumSchema),
});
