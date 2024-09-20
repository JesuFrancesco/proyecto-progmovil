import { z } from 'zod';
import { ChatWhereUniqueInputObjectSchema } from './objects/ChatWhereUniqueInput.schema';
import { ChatCreateInputObjectSchema } from './objects/ChatCreateInput.schema';
import { ChatUncheckedCreateInputObjectSchema } from './objects/ChatUncheckedCreateInput.schema';
import { ChatUpdateInputObjectSchema } from './objects/ChatUpdateInput.schema';
import { ChatUncheckedUpdateInputObjectSchema } from './objects/ChatUncheckedUpdateInput.schema';

export const ChatUpsertSchema = z.object({
  where: ChatWhereUniqueInputObjectSchema,
  create: z.union([
    ChatCreateInputObjectSchema,
    ChatUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ChatUpdateInputObjectSchema,
    ChatUncheckedUpdateInputObjectSchema,
  ]),
});
