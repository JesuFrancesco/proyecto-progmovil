import { z } from 'zod';
import { ChatParticipantOrderByWithRelationInputObjectSchema } from './objects/ChatParticipantOrderByWithRelationInput.schema';
import { ChatParticipantWhereInputObjectSchema } from './objects/ChatParticipantWhereInput.schema';
import { ChatParticipantWhereUniqueInputObjectSchema } from './objects/ChatParticipantWhereUniqueInput.schema';
import { ChatParticipantScalarFieldEnumSchema } from './enums/ChatParticipantScalarFieldEnum.schema';

export const ChatParticipantFindManySchema = z.object({
  orderBy: z
    .union([
      ChatParticipantOrderByWithRelationInputObjectSchema,
      ChatParticipantOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ChatParticipantWhereInputObjectSchema.optional(),
  cursor: ChatParticipantWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ChatParticipantScalarFieldEnumSchema).optional(),
});
