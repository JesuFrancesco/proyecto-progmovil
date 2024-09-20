import { z } from 'zod';
import { QuestionReplyWhereInputObjectSchema } from './objects/QuestionReplyWhereInput.schema';

export const QuestionReplyDeleteManySchema = z.object({
  where: QuestionReplyWhereInputObjectSchema.optional(),
});
