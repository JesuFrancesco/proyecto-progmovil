import { z } from 'zod';
import { RatingAttachmentUpdateManyMutationInputObjectSchema } from './objects/RatingAttachmentUpdateManyMutationInput.schema';
import { RatingAttachmentWhereInputObjectSchema } from './objects/RatingAttachmentWhereInput.schema';

export const RatingAttachmentUpdateManySchema = z.object({
  data: RatingAttachmentUpdateManyMutationInputObjectSchema,
  where: RatingAttachmentWhereInputObjectSchema.optional(),
});
