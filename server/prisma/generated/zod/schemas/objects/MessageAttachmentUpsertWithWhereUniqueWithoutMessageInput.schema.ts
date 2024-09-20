import { z } from 'zod';
import { MessageAttachmentWhereUniqueInputObjectSchema } from './MessageAttachmentWhereUniqueInput.schema';
import { MessageAttachmentUpdateWithoutMessageInputObjectSchema } from './MessageAttachmentUpdateWithoutMessageInput.schema';
import { MessageAttachmentUncheckedUpdateWithoutMessageInputObjectSchema } from './MessageAttachmentUncheckedUpdateWithoutMessageInput.schema';
import { MessageAttachmentCreateWithoutMessageInputObjectSchema } from './MessageAttachmentCreateWithoutMessageInput.schema';
import { MessageAttachmentUncheckedCreateWithoutMessageInputObjectSchema } from './MessageAttachmentUncheckedCreateWithoutMessageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageAttachmentUpsertWithWhereUniqueWithoutMessageInput> =
  z
    .object({
      where: z.lazy(() => MessageAttachmentWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => MessageAttachmentUpdateWithoutMessageInputObjectSchema),
        z.lazy(
          () => MessageAttachmentUncheckedUpdateWithoutMessageInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => MessageAttachmentCreateWithoutMessageInputObjectSchema),
        z.lazy(
          () => MessageAttachmentUncheckedCreateWithoutMessageInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MessageAttachmentUpsertWithWhereUniqueWithoutMessageInputObjectSchema =
  Schema;
