import { z } from 'zod';
import { ChatMessageOrderByWithRelationInputObjectSchema } from './objects/ChatMessageOrderByWithRelationInput.schema';
import { ChatMessageWhereInputObjectSchema } from './objects/ChatMessageWhereInput.schema';
import { ChatMessageWhereUniqueInputObjectSchema } from './objects/ChatMessageWhereUniqueInput.schema';
import { ChatMessageScalarFieldEnumSchema } from './enums/ChatMessageScalarFieldEnum.schema';

export const ChatMessageFindFirstSchema = z.object({
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
  distinct: z.array(ChatMessageScalarFieldEnumSchema).optional(),
});
