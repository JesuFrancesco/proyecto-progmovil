import { z } from 'zod';
import { MessageAttachmentUpdateInputObjectSchema } from './objects/MessageAttachmentUpdateInput.schema';
import { MessageAttachmentUncheckedUpdateInputObjectSchema } from './objects/MessageAttachmentUncheckedUpdateInput.schema';
import { MessageAttachmentWhereUniqueInputObjectSchema } from './objects/MessageAttachmentWhereUniqueInput.schema';

export const MessageAttachmentUpdateOneSchema = z.object({
  data: z.union([
    MessageAttachmentUpdateInputObjectSchema,
    MessageAttachmentUncheckedUpdateInputObjectSchema,
  ]),
  where: MessageAttachmentWhereUniqueInputObjectSchema,
});
