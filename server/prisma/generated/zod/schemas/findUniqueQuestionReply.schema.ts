import { z } from 'zod';
import { QuestionReplyWhereUniqueInputObjectSchema } from './objects/QuestionReplyWhereUniqueInput.schema';

export const QuestionReplyFindUniqueSchema = z.object({
  where: QuestionReplyWhereUniqueInputObjectSchema,
});
