import { z } from 'zod';
import { QuestionReplyOrderByWithRelationInputObjectSchema } from './objects/QuestionReplyOrderByWithRelationInput.schema';
import { QuestionReplyWhereInputObjectSchema } from './objects/QuestionReplyWhereInput.schema';
import { QuestionReplyWhereUniqueInputObjectSchema } from './objects/QuestionReplyWhereUniqueInput.schema';
import { QuestionReplyScalarFieldEnumSchema } from './enums/QuestionReplyScalarFieldEnum.schema';

export const QuestionReplyFindFirstSchema = z.object({
  orderBy: z
    .union([
      QuestionReplyOrderByWithRelationInputObjectSchema,
      QuestionReplyOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: QuestionReplyWhereInputObjectSchema.optional(),
  cursor: QuestionReplyWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(QuestionReplyScalarFieldEnumSchema).optional(),
});
