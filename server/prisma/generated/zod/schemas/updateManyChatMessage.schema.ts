import { z } from 'zod';
import { ChatMessageUpdateManyMutationInputObjectSchema } from './objects/ChatMessageUpdateManyMutationInput.schema';
import { ChatMessageWhereInputObjectSchema } from './objects/ChatMessageWhereInput.schema';

export const ChatMessageUpdateManySchema = z.object({
  data: ChatMessageUpdateManyMutationInputObjectSchema,
  where: ChatMessageWhereInputObjectSchema.optional(),
});
