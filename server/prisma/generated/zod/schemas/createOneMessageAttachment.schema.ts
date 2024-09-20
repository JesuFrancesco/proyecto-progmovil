import { z } from 'zod';
import { MessageAttachmentCreateInputObjectSchema } from './objects/MessageAttachmentCreateInput.schema';
import { MessageAttachmentUncheckedCreateInputObjectSchema } from './objects/MessageAttachmentUncheckedCreateInput.schema';

export const MessageAttachmentCreateOneSchema = z.object({
  data: z.union([
    MessageAttachmentCreateInputObjectSchema,
    MessageAttachmentUncheckedCreateInputObjectSchema,
  ]),
});
