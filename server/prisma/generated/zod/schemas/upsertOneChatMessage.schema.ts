import { z } from 'zod';
import { ChatMessageWhereUniqueInputObjectSchema } from './objects/ChatMessageWhereUniqueInput.schema';
import { ChatMessageCreateInputObjectSchema } from './objects/ChatMessageCreateInput.schema';
import { ChatMessageUncheckedCreateInputObjectSchema } from './objects/ChatMessageUncheckedCreateInput.schema';
import { ChatMessageUpdateInputObjectSchema } from './objects/ChatMessageUpdateInput.schema';
import { ChatMessageUncheckedUpdateInputObjectSchema } from './objects/ChatMessageUncheckedUpdateInput.schema';

export const ChatMessageUpsertSchema = z.object({
  where: ChatMessageWhereUniqueInputObjectSchema,
  create: z.union([
    ChatMessageCreateInputObjectSchema,
    ChatMessageUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ChatMessageUpdateInputObjectSchema,
    ChatMessageUncheckedUpdateInputObjectSchema,
  ]),
});
