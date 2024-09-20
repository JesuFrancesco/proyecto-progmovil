import { z } from 'zod';
import { MessageAttachmentOrderByWithRelationInputObjectSchema } from './objects/MessageAttachmentOrderByWithRelationInput.schema';
import { MessageAttachmentWhereInputObjectSchema } from './objects/MessageAttachmentWhereInput.schema';
import { MessageAttachmentWhereUniqueInputObjectSchema } from './objects/MessageAttachmentWhereUniqueInput.schema';
import { MessageAttachmentScalarFieldEnumSchema } from './enums/MessageAttachmentScalarFieldEnum.schema';

export const MessageAttachmentFindManySchema = z.object({
  orderBy: z
    .union([
      MessageAttachmentOrderByWithRelationInputObjectSchema,
      MessageAttachmentOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: MessageAttachmentWhereInputObjectSchema.optional(),
  cursor: MessageAttachmentWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(MessageAttachmentScalarFieldEnumSchema).optional(),
});
