import { z } from 'zod';
import { ChatCreateInputObjectSchema } from './objects/ChatCreateInput.schema';
import { ChatUncheckedCreateInputObjectSchema } from './objects/ChatUncheckedCreateInput.schema';

export const ChatCreateOneSchema = z.object({
  data: z.union([
    ChatCreateInputObjectSchema,
    ChatUncheckedCreateInputObjectSchema,
  ]),
});
