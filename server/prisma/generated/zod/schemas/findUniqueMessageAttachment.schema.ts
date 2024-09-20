import { z } from 'zod';
import { MessageAttachmentWhereUniqueInputObjectSchema } from './objects/MessageAttachmentWhereUniqueInput.schema';

export const MessageAttachmentFindUniqueSchema = z.object({
  where: MessageAttachmentWhereUniqueInputObjectSchema,
});
