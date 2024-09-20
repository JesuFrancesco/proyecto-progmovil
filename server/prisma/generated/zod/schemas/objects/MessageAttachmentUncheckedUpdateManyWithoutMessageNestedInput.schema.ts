import { z } from 'zod';
import { MessageAttachmentCreateWithoutMessageInputObjectSchema } from './MessageAttachmentCreateWithoutMessageInput.schema';
import { MessageAttachmentUncheckedCreateWithoutMessageInputObjectSchema } from './MessageAttachmentUncheckedCreateWithoutMessageInput.schema';
import { MessageAttachmentCreateOrConnectWithoutMessageInputObjectSchema } from './MessageAttachmentCreateOrConnectWithoutMessageInput.schema';
import { MessageAttachmentUpsertWithWhereUniqueWithoutMessageInputObjectSchema } from './MessageAttachmentUpsertWithWhereUniqueWithoutMessageInput.schema';
import { MessageAttachmentWhereUniqueInputObjectSchema } from './MessageAttachmentWhereUniqueInput.schema';
import { MessageAttachmentUpdateWithWhereUniqueWithoutMessageInputObjectSchema } from './MessageAttachmentUpdateWithWhereUniqueWithoutMessageInput.schema';
import { MessageAttachmentUpdateManyWithWhereWithoutMessageInputObjectSchema } from './MessageAttachmentUpdateManyWithWhereWithoutMessageInput.schema';
import { MessageAttachmentScalarWhereInputObjectSchema } from './MessageAttachmentScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageAttachmentUncheckedUpdateManyWithoutMessageNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              MessageAttachmentUpsertWithWhereUniqueWithoutMessageInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MessageAttachmentUpsertWithWhereUniqueWithoutMessageInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => MessageAttachmentWhereUniqueInputObjectSchema),
          z.lazy(() => MessageAttachmentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => MessageAttachmentWhereUniqueInputObjectSchema),
          z.lazy(() => MessageAttachmentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => MessageAttachmentWhereUniqueInputObjectSchema),
          z.lazy(() => MessageAttachmentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => MessageAttachmentWhereUniqueInputObjectSchema),
          z.lazy(() => MessageAttachmentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              MessageAttachmentUpdateWithWhereUniqueWithoutMessageInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MessageAttachmentUpdateWithWhereUniqueWithoutMessageInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              MessageAttachmentUpdateManyWithWhereWithoutMessageInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MessageAttachmentUpdateManyWithWhereWithoutMessageInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => MessageAttachmentScalarWhereInputObjectSchema),
          z.lazy(() => MessageAttachmentScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const MessageAttachmentUncheckedUpdateManyWithoutMessageNestedInputObjectSchema =
  Schema;
