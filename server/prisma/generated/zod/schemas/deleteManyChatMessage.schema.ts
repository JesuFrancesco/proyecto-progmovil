import { z } from 'zod';
import { ChatMessageWhereInputObjectSchema } from './objects/ChatMessageWhereInput.schema';

export const ChatMessageDeleteManySchema = z.object({
  where: ChatMessageWhereInputObjectSchema.optional(),
});
