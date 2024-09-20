import { z } from 'zod';
import { QuestionReplyWhereUniqueInputObjectSchema } from './objects/QuestionReplyWhereUniqueInput.schema';

export const QuestionReplyDeleteOneSchema = z.object({
  where: QuestionReplyWhereUniqueInputObjectSchema,
});
