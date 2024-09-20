import { z } from 'zod';
import { RatingAttachmentWhereUniqueInputObjectSchema } from './objects/RatingAttachmentWhereUniqueInput.schema';

export const RatingAttachmentDeleteOneSchema = z.object({
  where: RatingAttachmentWhereUniqueInputObjectSchema,
});
