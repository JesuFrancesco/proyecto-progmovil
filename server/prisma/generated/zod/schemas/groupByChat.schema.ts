import { z } from 'zod';
import { ChatWhereInputObjectSchema } from './objects/ChatWhereInput.schema';
import { ChatOrderByWithAggregationInputObjectSchema } from './objects/ChatOrderByWithAggregationInput.schema';
import { ChatScalarWhereWithAggregatesInputObjectSchema } from './objects/ChatScalarWhereWithAggregatesInput.schema';
import { ChatScalarFieldEnumSchema } from './enums/ChatScalarFieldEnum.schema';

export const ChatGroupBySchema = z.object({
  where: ChatWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ChatOrderByWithAggregationInputObjectSchema,
      ChatOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ChatScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ChatScalarFieldEnumSchema),
});
