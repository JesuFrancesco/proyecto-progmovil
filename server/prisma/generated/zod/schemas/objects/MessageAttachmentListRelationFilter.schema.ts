import { z } from 'zod';
import { MessageAttachmentWhereInputObjectSchema } from './MessageAttachmentWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageAttachmentListRelationFilter> = z
  .object({
    every: z.lazy(() => MessageAttachmentWhereInputObjectSchema).optional(),
    some: z.lazy(() => MessageAttachmentWhereInputObjectSchema).optional(),
    none: z.lazy(() => MessageAttachmentWhereInputObjectSchema).optional(),
  })
  .strict();

export const MessageAttachmentListRelationFilterObjectSchema = Schema;
