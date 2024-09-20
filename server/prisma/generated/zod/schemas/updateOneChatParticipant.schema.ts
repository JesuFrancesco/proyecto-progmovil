import { z } from 'zod';
import { ChatParticipantUpdateInputObjectSchema } from './objects/ChatParticipantUpdateInput.schema';
import { ChatParticipantUncheckedUpdateInputObjectSchema } from './objects/ChatParticipantUncheckedUpdateInput.schema';
import { ChatParticipantWhereUniqueInputObjectSchema } from './objects/ChatParticipantWhereUniqueInput.schema';

export const ChatParticipantUpdateOneSchema = z.object({
  data: z.union([
    ChatParticipantUpdateInputObjectSchema,
    ChatParticipantUncheckedUpdateInputObjectSchema,
  ]),
  where: ChatParticipantWhereUniqueInputObjectSchema,
});
