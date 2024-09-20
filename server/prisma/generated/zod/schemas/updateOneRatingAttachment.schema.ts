import { z } from 'zod';
import { RatingAttachmentUpdateInputObjectSchema } from './objects/RatingAttachmentUpdateInput.schema';
import { RatingAttachmentUncheckedUpdateInputObjectSchema } from './objects/RatingAttachmentUncheckedUpdateInput.schema';
import { RatingAttachmentWhereUniqueInputObjectSchema } from './objects/RatingAttachmentWhereUniqueInput.schema';

export const RatingAttachmentUpdateOneSchema = z.object({
  data: z.union([
    RatingAttachmentUpdateInputObjectSchema,
    RatingAttachmentUncheckedUpdateInputObjectSchema,
  ]),
  where: RatingAttachmentWhereUniqueInputObjectSchema,
});
