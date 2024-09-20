import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { MessageRelationFilterObjectSchema } from './MessageRelationFilter.schema';
import { MessageWhereInputObjectSchema } from './MessageWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageAttachmentWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => MessageAttachmentWhereInputObjectSchema),
        z.lazy(() => MessageAttachmentWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => MessageAttachmentWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => MessageAttachmentWhereInputObjectSchema),
        z.lazy(() => MessageAttachmentWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    blobUrl: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    filename: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    type: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    messageId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    message: z
      .union([
        z.lazy(() => MessageRelationFilterObjectSchema),
        z.lazy(() => MessageWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const MessageAttachmentWhereInputObjectSchema = Schema;
