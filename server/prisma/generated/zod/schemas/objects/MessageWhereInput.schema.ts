import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { AccountRelationFilterObjectSchema } from './AccountRelationFilter.schema';
import { AccountWhereInputObjectSchema } from './AccountWhereInput.schema';
import { MessageAttachmentListRelationFilterObjectSchema } from './MessageAttachmentListRelationFilter.schema';
import { ChatMessageListRelationFilterObjectSchema } from './ChatMessageListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => MessageWhereInputObjectSchema),
        z.lazy(() => MessageWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => MessageWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => MessageWhereInputObjectSchema),
        z.lazy(() => MessageWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    text: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    status: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    accountId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    account: z
      .union([
        z.lazy(() => AccountRelationFilterObjectSchema),
        z.lazy(() => AccountWhereInputObjectSchema),
      ])
      .optional(),
    messageAttachments: z
      .lazy(() => MessageAttachmentListRelationFilterObjectSchema)
      .optional(),
    chatMessages: z
      .lazy(() => ChatMessageListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const MessageWhereInputObjectSchema = Schema;
