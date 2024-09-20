import { z } from 'zod';
import { QuestionReplyWhereUniqueInputObjectSchema } from './objects/QuestionReplyWhereUniqueInput.schema';
import { QuestionReplyCreateInputObjectSchema } from './objects/QuestionReplyCreateInput.schema';
import { QuestionReplyUncheckedCreateInputObjectSchema } from './objects/QuestionReplyUncheckedCreateInput.schema';
import { QuestionReplyUpdateInputObjectSchema } from './objects/QuestionReplyUpdateInput.schema';
import { QuestionReplyUncheckedUpdateInputObjectSchema } from './objects/QuestionReplyUncheckedUpdateInput.schema';

export const QuestionReplyUpsertSchema = z.object({
  where: QuestionReplyWhereUniqueInputObjectSchema,
  create: z.union([
    QuestionReplyCreateInputObjectSchema,
    QuestionReplyUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    QuestionReplyUpdateInputObjectSchema,
    QuestionReplyUncheckedUpdateInputObjectSchema,
  ]),
});
