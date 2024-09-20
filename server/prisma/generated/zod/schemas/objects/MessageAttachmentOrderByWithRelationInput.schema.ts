import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { MessageOrderByWithRelationInputObjectSchema } from './MessageOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageAttachmentOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    blobUrl: z.lazy(() => SortOrderSchema).optional(),
    filename: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    messageId: z.lazy(() => SortOrderSchema).optional(),
    message: z
      .lazy(() => MessageOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const MessageAttachmentOrderByWithRelationInputObjectSchema = Schema;
