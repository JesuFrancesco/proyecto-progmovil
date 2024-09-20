import { z } from 'zod';
import { MessageCreateWithoutAccountInputObjectSchema } from './MessageCreateWithoutAccountInput.schema';
import { MessageUncheckedCreateWithoutAccountInputObjectSchema } from './MessageUncheckedCreateWithoutAccountInput.schema';
import { MessageCreateOrConnectWithoutAccountInputObjectSchema } from './MessageCreateOrConnectWithoutAccountInput.schema';
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageCreateNestedManyWithoutAccountInput> = z
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
    connect: z
      .union([
        z.lazy(() => MessageWhereUniqueInputObjectSchema),
        z.lazy(() => MessageWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const MessageCreateNestedManyWithoutAccountInputObjectSchema = Schema;
