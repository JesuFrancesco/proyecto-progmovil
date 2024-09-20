import { z } from 'zod';
import { ChatParticipantWhereUniqueInputObjectSchema } from './objects/ChatParticipantWhereUniqueInput.schema';

export const ChatParticipantFindUniqueSchema = z.object({
  where: ChatParticipantWhereUniqueInputObjectSchema,
});
