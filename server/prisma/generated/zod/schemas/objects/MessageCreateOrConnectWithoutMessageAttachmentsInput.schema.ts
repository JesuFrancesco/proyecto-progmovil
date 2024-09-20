import { z } from 'zod';
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageCreateWithoutMessageAttachmentsInputObjectSchema } from './MessageCreateWithoutMessageAttachmentsInput.schema';
import { MessageUncheckedCreateWithoutMessageAttachmentsInputObjectSchema } from './MessageUncheckedCreateWithoutMessageAttachmentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageCreateOrConnectWithoutMessageAttachmentsInput> =
  z
    .object({
      where: z.lazy(() => MessageWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => MessageCreateWithoutMessageAttachmentsInputObjectSchema),
        z.lazy(
          () =>
            MessageUncheckedCreateWithoutMessageAttachmentsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MessageCreateOrConnectWithoutMessageAttachmentsInputObjectSchema =
  Schema;
