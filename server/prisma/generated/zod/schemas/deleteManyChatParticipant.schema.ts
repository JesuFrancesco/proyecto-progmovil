import { z } from 'zod';
import { ChatParticipantWhereInputObjectSchema } from './objects/ChatParticipantWhereInput.schema';

export const ChatParticipantDeleteManySchema = z.object({
  where: ChatParticipantWhereInputObjectSchema.optional(),
});
