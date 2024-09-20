import { z } from 'zod';
import { ChatParticipantUpdateManyMutationInputObjectSchema } from './objects/ChatParticipantUpdateManyMutationInput.schema';
import { ChatParticipantWhereInputObjectSchema } from './objects/ChatParticipantWhereInput.schema';

export const ChatParticipantUpdateManySchema = z.object({
  data: ChatParticipantUpdateManyMutationInputObjectSchema,
  where: ChatParticipantWhereInputObjectSchema.optional(),
});
