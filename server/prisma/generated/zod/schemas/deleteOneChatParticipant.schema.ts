import { z } from 'zod';
import { ChatParticipantWhereUniqueInputObjectSchema } from './objects/ChatParticipantWhereUniqueInput.schema';

export const ChatParticipantDeleteOneSchema = z.object({
  where: ChatParticipantWhereUniqueInputObjectSchema,
});
