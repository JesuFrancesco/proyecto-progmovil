import { z } from 'zod';
import { RatingAttachmentWhereUniqueInputObjectSchema } from './objects/RatingAttachmentWhereUniqueInput.schema';

export const RatingAttachmentFindUniqueSchema = z.object({
  where: RatingAttachmentWhereUniqueInputObjectSchema,
});
