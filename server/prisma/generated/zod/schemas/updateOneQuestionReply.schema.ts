import { z } from 'zod';
import { QuestionReplyUpdateInputObjectSchema } from './objects/QuestionReplyUpdateInput.schema';
import { QuestionReplyUncheckedUpdateInputObjectSchema } from './objects/QuestionReplyUncheckedUpdateInput.schema';
import { QuestionReplyWhereUniqueInputObjectSchema } from './objects/QuestionReplyWhereUniqueInput.schema';

export const QuestionReplyUpdateOneSchema = z.object({
  data: z.union([
    QuestionReplyUpdateInputObjectSchema,
    QuestionReplyUncheckedUpdateInputObjectSchema,
  ]),
  where: QuestionReplyWhereUniqueInputObjectSchema,
});
