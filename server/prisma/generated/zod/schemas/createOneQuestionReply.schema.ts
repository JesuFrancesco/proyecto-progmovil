import { z } from 'zod';
import { QuestionReplyCreateInputObjectSchema } from './objects/QuestionReplyCreateInput.schema';
import { QuestionReplyUncheckedCreateInputObjectSchema } from './objects/QuestionReplyUncheckedCreateInput.schema';

export const QuestionReplyCreateOneSchema = z.object({
  data: z.union([
    QuestionReplyCreateInputObjectSchema,
    QuestionReplyUncheckedCreateInputObjectSchema,
  ]),
});
