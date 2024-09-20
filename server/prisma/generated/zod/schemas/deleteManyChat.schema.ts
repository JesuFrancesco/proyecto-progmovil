import { z } from 'zod';
import { ChatWhereInputObjectSchema } from './objects/ChatWhereInput.schema';

export const ChatDeleteManySchema = z.object({
  where: ChatWhereInputObjectSchema.optional(),
});
