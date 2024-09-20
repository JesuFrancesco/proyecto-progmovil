import { z } from 'zod';
import { RatingAttachmentWhereInputObjectSchema } from './objects/RatingAttachmentWhereInput.schema';

export const RatingAttachmentDeleteManySchema = z.object({
  where: RatingAttachmentWhereInputObjectSchema.optional(),
});
