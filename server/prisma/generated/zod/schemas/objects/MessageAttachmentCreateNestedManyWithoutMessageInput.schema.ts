import { z } from 'zod';
import { MessageAttachmentCreateWithoutMessageInputObjectSchema } from './MessageAttachmentCreateWithoutMessageInput.schema';
import { MessageAttachmentUncheckedCreateWithoutMessageInputObjectSchema } from './MessageAttachmentUncheckedCreateWithoutMessageInput.schema';
import { MessageAttachmentCreateOrConnectWithoutMessageInputObjectSchema } from './MessageAttachmentCreateOrConnectWithoutMessageInput.schema';
import { MessageAttachmentWhereUniqueInputObjectSchema } from './MessageAttachmentWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageAttachmentCreateNestedManyWithoutMessageInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MessageAttachmentCreateWithoutMessageInputObjectSchema),
          z
            .lazy(() => MessageAttachmentCreateWithoutMessageInputObjectSchema)
            .array(),
          z.lazy(
            () =>
              MessageAttachmentUncheckedCreateWithoutMessageInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MessageAttachmentUncheckedCreateWithoutMessageInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              MessageAttachmentCreateOrConnectWithoutMessageInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MessageAttachmentCreateOrConnectWithoutMessageInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => MessageAttachmentWhereUniqueInputObjectSchema),
          z.lazy(() => MessageAttachmentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const MessageAttachmentCreateNestedManyWithoutMessageInputObjectSchema =
  Schema;
