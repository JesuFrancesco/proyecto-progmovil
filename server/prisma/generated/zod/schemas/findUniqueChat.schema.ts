import { z } from 'zod';
import { ChatWhereUniqueInputObjectSchema } from './objects/ChatWhereUniqueInput.schema';

export const ChatFindUniqueSchema = z.object({
  where: ChatWhereUniqueInputObjectSchema,
});
