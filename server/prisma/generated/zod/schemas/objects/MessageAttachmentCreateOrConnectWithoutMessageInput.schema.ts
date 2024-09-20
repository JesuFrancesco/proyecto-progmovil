import { z } from 'zod';
import { MessageAttachmentWhereUniqueInputObjectSchema } from './MessageAttachmentWhereUniqueInput.schema';
import { MessageAttachmentCreateWithoutMessageInputObjectSchema } from './MessageAttachmentCreateWithoutMessageInput.schema';
import { MessageAttachmentUncheckedCreateWithoutMessageInputObjectSchema } from './MessageAttachmentUncheckedCreateWithoutMessageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageAttachmentCreateOrConnectWithoutMessageInput> =
  z
    .object({
      where: z.lazy(() => MessageAttachmentWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => MessageAttachmentCreateWithoutMessageInputObjectSchema),
        z.lazy(
          () => MessageAttachmentUncheckedCreateWithoutMessageInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MessageAttachmentCreateOrConnectWithoutMessageInputObjectSchema =
  Schema;
