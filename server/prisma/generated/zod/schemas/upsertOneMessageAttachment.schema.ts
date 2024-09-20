import { z } from 'zod';
import { MessageAttachmentWhereUniqueInputObjectSchema } from './objects/MessageAttachmentWhereUniqueInput.schema';
import { MessageAttachmentCreateInputObjectSchema } from './objects/MessageAttachmentCreateInput.schema';
import { MessageAttachmentUncheckedCreateInputObjectSchema } from './objects/MessageAttachmentUncheckedCreateInput.schema';
import { MessageAttachmentUpdateInputObjectSchema } from './objects/MessageAttachmentUpdateInput.schema';
import { MessageAttachmentUncheckedUpdateInputObjectSchema } from './objects/MessageAttachmentUncheckedUpdateInput.schema';

export const MessageAttachmentUpsertSchema = z.object({
  where: MessageAttachmentWhereUniqueInputObjectSchema,
  create: z.union([
    MessageAttachmentCreateInputObjectSchema,
    MessageAttachmentUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    MessageAttachmentUpdateInputObjectSchema,
    MessageAttachmentUncheckedUpdateInputObjectSchema,
  ]),
});
