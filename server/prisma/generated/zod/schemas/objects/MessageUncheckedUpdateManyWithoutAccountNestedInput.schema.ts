import { z } from 'zod';
import { MessageCreateWithoutAccountInputObjectSchema } from './MessageCreateWithoutAccountInput.schema';
import { MessageUncheckedCreateWithoutAccountInputObjectSchema } from './MessageUncheckedCreateWithoutAccountInput.schema';
import { MessageCreateOrConnectWithoutAccountInputObjectSchema } from './MessageCreateOrConnectWithoutAccountInput.schema';
import { MessageUpsertWithWhereUniqueWithoutAccountInputObjectSchema } from './MessageUpsertWithWhereUniqueWithoutAccountInput.schema';
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageUpdateWithWhereUniqueWithoutAccountInputObjectSchema } from './MessageUpdateWithWhereUniqueWithoutAccountInput.schema';
import { MessageUpdateManyWithWhereWithoutAccountInputObjectSchema } from './MessageUpdateManyWithWhereWithoutAccountInput.schema';
import { MessageScalarWhereInputObjectSchema } from './MessageScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageUncheckedUpdateManyWithoutAccountNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MessageCreateWithoutAccountInputObjectSchema),
          z.lazy(() => MessageCreateWithoutAccountInputObjectSchema).array(),
          z.lazy(() => MessageUncheckedCreateWithoutAccountInputObjectSchema),
          z
            .lazy(() => MessageUncheckedCreateWithoutAccountInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => MessageCreateOrConnectWithoutAccountInputObjectSchema),
          z
            .lazy(() => MessageCreateOrConnectWithoutAccountInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => MessageUpsertWithWhereUniqueWithoutAccountInputObjectSchema,
          ),
          z
            .lazy(
              () => MessageUpsertWithWhereUniqueWithoutAccountInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => MessageWhereUniqueInputObjectSchema),
          z.lazy(() => MessageWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => MessageWhereUniqueInputObjectSchema),
          z.lazy(() => MessageWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => MessageWhereUniqueInputObjectSchema),
          z.lazy(() => MessageWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => MessageWhereUniqueInputObjectSchema),
          z.lazy(() => MessageWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => MessageUpdateWithWhereUniqueWithoutAccountInputObjectSchema,
          ),
          z
            .lazy(
              () => MessageUpdateWithWhereUniqueWithoutAccountInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => MessageUpdateManyWithWhereWithoutAccountInputObjectSchema,
          ),
          z
            .lazy(
              () => MessageUpdateManyWithWhereWithoutAccountInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => MessageScalarWhereInputObjectSchema),
          z.lazy(() => MessageScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const MessageUncheckedUpdateManyWithoutAccountNestedInputObjectSchema =
  Schema;
