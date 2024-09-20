import { z } from 'zod';
import { ChatMessageWhereUniqueInputObjectSchema } from './objects/ChatMessageWhereUniqueInput.schema';

export const ChatMessageFindUniqueSchema = z.object({
  where: ChatMessageWhereUniqueInputObjectSchema,
});
