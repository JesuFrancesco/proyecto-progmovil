import { z } from 'zod';
import { MessageAttachmentScalarWhereInputObjectSchema } from './MessageAttachmentScalarWhereInput.schema';
import { MessageAttachmentUpdateManyMutationInputObjectSchema } from './MessageAttachmentUpdateManyMutationInput.schema';
import { MessageAttachmentUncheckedUpdateManyWithoutMessageAttachmentsInputObjectSchema } from './MessageAttachmentUncheckedUpdateManyWithoutMessageAttachmentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageAttachmentUpdateManyWithWhereWithoutMessageInput> =
  z
    .object({
      where: z.lazy(() => MessageAttachmentScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => MessageAttachmentUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            MessageAttachmentUncheckedUpdateManyWithoutMessageAttachmentsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MessageAttachmentUpdateManyWithWhereWithoutMessageInputObjectSchema =
  Schema;
