import { z } from 'zod';

export const QuestionReplyScalarFieldEnumSchema = z.enum([
  'id',
  'text',
  'createdAt',
  'questionId',
]);
