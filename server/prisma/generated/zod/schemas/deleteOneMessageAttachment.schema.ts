import { z } from 'zod';
import { MessageAttachmentWhereUniqueInputObjectSchema } from './objects/MessageAttachmentWhereUniqueInput.schema';

export const MessageAttachmentDeleteOneSchema = z.object({
  where: MessageAttachmentWhereUniqueInputObjectSchema,
});
