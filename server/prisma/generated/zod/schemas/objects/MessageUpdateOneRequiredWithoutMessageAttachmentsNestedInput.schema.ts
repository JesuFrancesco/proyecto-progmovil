import { z } from 'zod';
import { MessageCreateWithoutMessageAttachmentsInputObjectSchema } from './MessageCreateWithoutMessageAttachmentsInput.schema';
import { MessageUncheckedCreateWithoutMessageAttachmentsInputObjectSchema } from './MessageUncheckedCreateWithoutMessageAttachmentsInput.schema';
import { MessageCreateOrConnectWithoutMessageAttachmentsInputObjectSchema } from './MessageCreateOrConnectWithoutMessageAttachmentsInput.schema';
import { MessageUpsertWithoutMessageAttachmentsInputObjectSchema } from './MessageUpsertWithoutMessageAttachmentsInput.schema';
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageUpdateWithoutMessageAttachmentsInputObjectSchema } from './MessageUpdateWithoutMessageAttachmentsInput.schema';
import { MessageUncheckedUpdateWithoutMessageAttachmentsInputObjectSchema } from './MessageUncheckedUpdateWithoutMessageAttachmentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageUpdateOneRequiredWithoutMessageAttachmentsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MessageCreateWithoutMessageAttachmentsInputObjectSchema),
          z.lazy(
            () =>
              MessageUncheckedCreateWithoutMessageAttachmentsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            MessageCreateOrConnectWithoutMessageAttachmentsInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => MessageUpsertWithoutMessageAttachmentsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => MessageWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => MessageUpdateWithoutMessageAttachmentsInputObjectSchema),
          z.lazy(
            () =>
              MessageUncheckedUpdateWithoutMessageAttachmentsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const MessageUpdateOneRequiredWithoutMessageAttachmentsNestedInputObjectSchema =
  Schema;
