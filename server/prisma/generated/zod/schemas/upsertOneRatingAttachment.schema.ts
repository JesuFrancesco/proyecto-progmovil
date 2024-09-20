import { z } from 'zod';
import { RatingAttachmentWhereUniqueInputObjectSchema } from './objects/RatingAttachmentWhereUniqueInput.schema';
import { RatingAttachmentCreateInputObjectSchema } from './objects/RatingAttachmentCreateInput.schema';
import { RatingAttachmentUncheckedCreateInputObjectSchema } from './objects/RatingAttachmentUncheckedCreateInput.schema';
import { RatingAttachmentUpdateInputObjectSchema } from './objects/RatingAttachmentUpdateInput.schema';
import { RatingAttachmentUncheckedUpdateInputObjectSchema } from './objects/RatingAttachmentUncheckedUpdateInput.schema';

export const RatingAttachmentUpsertSchema = z.object({
  where: RatingAttachmentWhereUniqueInputObjectSchema,
  create: z.union([
    RatingAttachmentCreateInputObjectSchema,
    RatingAttachmentUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    RatingAttachmentUpdateInputObjectSchema,
    RatingAttachmentUncheckedUpdateInputObjectSchema,
  ]),
});
