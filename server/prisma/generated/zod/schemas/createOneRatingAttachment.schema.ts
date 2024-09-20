import { z } from 'zod';
import { RatingAttachmentCreateInputObjectSchema } from './objects/RatingAttachmentCreateInput.schema';
import { RatingAttachmentUncheckedCreateInputObjectSchema } from './objects/RatingAttachmentUncheckedCreateInput.schema';

export const RatingAttachmentCreateOneSchema = z.object({
  data: z.union([
    RatingAttachmentCreateInputObjectSchema,
    RatingAttachmentUncheckedCreateInputObjectSchema,
  ]),
});
