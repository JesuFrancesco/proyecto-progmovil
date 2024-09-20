import { z } from 'zod';
import { ChatMessageWhereUniqueInputObjectSchema } from './objects/ChatMessageWhereUniqueInput.schema';

export const ChatMessageDeleteOneSchema = z.object({
  where: ChatMessageWhereUniqueInputObjectSchema,
});
