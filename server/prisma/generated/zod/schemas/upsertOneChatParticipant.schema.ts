import { z } from 'zod';
import { ChatParticipantWhereUniqueInputObjectSchema } from './objects/ChatParticipantWhereUniqueInput.schema';
import { ChatParticipantCreateInputObjectSchema } from './objects/ChatParticipantCreateInput.schema';
import { ChatParticipantUncheckedCreateInputObjectSchema } from './objects/ChatParticipantUncheckedCreateInput.schema';
import { ChatParticipantUpdateInputObjectSchema } from './objects/ChatParticipantUpdateInput.schema';
import { ChatParticipantUncheckedUpdateInputObjectSchema } from './objects/ChatParticipantUncheckedUpdateInput.schema';

export const ChatParticipantUpsertSchema = z.object({
  where: ChatParticipantWhereUniqueInputObjectSchema,
  create: z.union([
    ChatParticipantCreateInputObjectSchema,
    ChatParticipantUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ChatParticipantUpdateInputObjectSchema,
    ChatParticipantUncheckedUpdateInputObjectSchema,
  ]),
});
