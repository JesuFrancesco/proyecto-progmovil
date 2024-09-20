import { z } from 'zod';
import { MessageCreateWithoutMessageAttachmentsInputObjectSchema } from './MessageCreateWithoutMessageAttachmentsInput.schema';
import { MessageUncheckedCreateWithoutMessageAttachmentsInputObjectSchema } from './MessageUncheckedCreateWithoutMessageAttachmentsInput.schema';
import { MessageCreateOrConnectWithoutMessageAttachmentsInputObjectSchema } from './MessageCreateOrConnectWithoutMessageAttachmentsInput.schema';
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageCreateNestedOneWithoutMessageAttachmentsInput> =
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
      connect: z.lazy(() => MessageWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const MessageCreateNestedOneWithoutMessageAttachmentsInputObjectSchema =
  Schema;
