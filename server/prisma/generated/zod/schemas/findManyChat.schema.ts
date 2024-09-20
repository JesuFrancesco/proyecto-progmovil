import { z } from 'zod';
import { ChatOrderByWithRelationInputObjectSchema } from './objects/ChatOrderByWithRelationInput.schema';
import { ChatWhereInputObjectSchema } from './objects/ChatWhereInput.schema';
import { ChatWhereUniqueInputObjectSchema } from './objects/ChatWhereUniqueInput.schema';
import { ChatScalarFieldEnumSchema } from './enums/ChatScalarFieldEnum.schema';

export const ChatFindManySchema = z.object({
  orderBy: z
    .union([
      ChatOrderByWithRelationInputObjectSchema,
      ChatOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ChatWhereInputObjectSchema.optional(),
  cursor: ChatWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ChatScalarFieldEnumSchema).optional(),
});
