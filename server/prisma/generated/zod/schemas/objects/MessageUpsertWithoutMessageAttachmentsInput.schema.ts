import { z } from 'zod';
import { MessageUpdateWithoutMessageAttachmentsInputObjectSchema } from './MessageUpdateWithoutMessageAttachmentsInput.schema';
import { MessageUncheckedUpdateWithoutMessageAttachmentsInputObjectSchema } from './MessageUncheckedUpdateWithoutMessageAttachmentsInput.schema';
import { MessageCreateWithoutMessageAttachmentsInputObjectSchema } from './MessageCreateWithoutMessageAttachmentsInput.schema';
import { MessageUncheckedCreateWithoutMessageAttachmentsInputObjectSchema } from './MessageUncheckedCreateWithoutMessageAttachmentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageUpsertWithoutMessageAttachmentsInput> = z
  .object({
    update: z.union([
      z.lazy(() => MessageUpdateWithoutMessageAttachmentsInputObjectSchema),
      z.lazy(
        () => MessageUncheckedUpdateWithoutMessageAttachmentsInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => MessageCreateWithoutMessageAttachmentsInputObjectSchema),
      z.lazy(
        () => MessageUncheckedCreateWithoutMessageAttachmentsInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const MessageUpsertWithoutMessageAttachmentsInputObjectSchema = Schema;
