import { z } from 'zod';
import { ChatUpdateInputObjectSchema } from './objects/ChatUpdateInput.schema';
import { ChatUncheckedUpdateInputObjectSchema } from './objects/ChatUncheckedUpdateInput.schema';
import { ChatWhereUniqueInputObjectSchema } from './objects/ChatWhereUniqueInput.schema';

export const ChatUpdateOneSchema = z.object({
  data: z.union([
    ChatUpdateInputObjectSchema,
    ChatUncheckedUpdateInputObjectSchema,
  ]),
  where: ChatWhereUniqueInputObjectSchema,
});
