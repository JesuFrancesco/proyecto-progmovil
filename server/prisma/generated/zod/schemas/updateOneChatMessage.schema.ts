import { z } from 'zod';
import { ChatMessageUpdateInputObjectSchema } from './objects/ChatMessageUpdateInput.schema';
import { ChatMessageUncheckedUpdateInputObjectSchema } from './objects/ChatMessageUncheckedUpdateInput.schema';
import { ChatMessageWhereUniqueInputObjectSchema } from './objects/ChatMessageWhereUniqueInput.schema';

export const ChatMessageUpdateOneSchema = z.object({
  data: z.union([
    ChatMessageUpdateInputObjectSchema,
    ChatMessageUncheckedUpdateInputObjectSchema,
  ]),
  where: ChatMessageWhereUniqueInputObjectSchema,
});
