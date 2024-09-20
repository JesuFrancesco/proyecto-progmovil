import { z } from 'zod';
import { ChatMessageCreateInputObjectSchema } from './objects/ChatMessageCreateInput.schema';
import { ChatMessageUncheckedCreateInputObjectSchema } from './objects/ChatMessageUncheckedCreateInput.schema';

export const ChatMessageCreateOneSchema = z.object({
  data: z.union([
    ChatMessageCreateInputObjectSchema,
    ChatMessageUncheckedCreateInputObjectSchema,
  ]),
});
