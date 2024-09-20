import { z } from 'zod';
import { ChatWhereUniqueInputObjectSchema } from './objects/ChatWhereUniqueInput.schema';

export const ChatDeleteOneSchema = z.object({
  where: ChatWhereUniqueInputObjectSchema,
});
