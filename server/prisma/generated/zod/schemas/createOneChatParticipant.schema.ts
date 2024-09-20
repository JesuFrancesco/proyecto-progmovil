import { z } from 'zod';
import { ChatParticipantCreateInputObjectSchema } from './objects/ChatParticipantCreateInput.schema';
import { ChatParticipantUncheckedCreateInputObjectSchema } from './objects/ChatParticipantUncheckedCreateInput.schema';

export const ChatParticipantCreateOneSchema = z.object({
  data: z.union([
    ChatParticipantCreateInputObjectSchema,
    ChatParticipantUncheckedCreateInputObjectSchema,
  ]),
});
