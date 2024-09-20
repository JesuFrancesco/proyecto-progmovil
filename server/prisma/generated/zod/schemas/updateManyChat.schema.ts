import { z } from 'zod';
import { ChatUpdateManyMutationInputObjectSchema } from './objects/ChatUpdateManyMutationInput.schema';
import { ChatWhereInputObjectSchema } from './objects/ChatWhereInput.schema';

export const ChatUpdateManySchema = z.object({
  data: ChatUpdateManyMutationInputObjectSchema,
  where: ChatWhereInputObjectSchema.optional(),
});
