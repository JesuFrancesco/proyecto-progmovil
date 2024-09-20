import { z } from 'zod';
import { MessageAttachmentWhereUniqueInputObjectSchema } from './MessageAttachmentWhereUniqueInput.schema';
import { MessageAttachmentUpdateWithoutMessageInputObjectSchema } from './MessageAttachmentUpdateWithoutMessageInput.schema';
import { MessageAttachmentUncheckedUpdateWithoutMessageInputObjectSchema } from './MessageAttachmentUncheckedUpdateWithoutMessageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageAttachmentUpdateWithWhereUniqueWithoutMessageInput> =
  z
    .object({
      where: z.lazy(() => MessageAttachmentWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => MessageAttachmentUpdateWithoutMessageInputObjectSchema),
        z.lazy(
          () => MessageAttachmentUncheckedUpdateWithoutMessageInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MessageAttachmentUpdateWithWhereUniqueWithoutMessageInputObjectSchema =
  Schema;
