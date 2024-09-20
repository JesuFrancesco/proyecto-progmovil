import { z } from 'zod';
import { QuestionReplyUpdateManyMutationInputObjectSchema } from './objects/QuestionReplyUpdateManyMutationInput.schema';
import { QuestionReplyWhereInputObjectSchema } from './objects/QuestionReplyWhereInput.schema';

export const QuestionReplyUpdateManySchema = z.object({
  data: QuestionReplyUpdateManyMutationInputObjectSchema,
  where: QuestionReplyWhereInputObjectSchema.optional(),
});
