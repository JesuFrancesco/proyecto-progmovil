import { z } from 'zod';
import { ChatWhereInputObjectSchema } from './ChatWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatRelationFilter> = z
  .object({
    is: z
      .lazy(() => ChatWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => ChatWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const ChatRelationFilterObjectSchema = Schema;
