import { z } from 'zod';
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageUpdateWithoutAccountInputObjectSchema } from './MessageUpdateWithoutAccountInput.schema';
import { MessageUncheckedUpdateWithoutAccountInputObjectSchema } from './MessageUncheckedUpdateWithoutAccountInput.schema';
import { MessageCreateWithoutAccountInputObjectSchema } from './MessageCreateWithoutAccountInput.schema';
import { MessageUncheckedCreateWithoutAccountInputObjectSchema } from './MessageUncheckedCreateWithoutAccountInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageUpsertWithWhereUniqueWithoutAccountInput> =
  z
    .object({
      where: z.lazy(() => MessageWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => MessageUpdateWithoutAccountInputObjectSchema),
        z.lazy(() => MessageUncheckedUpdateWithoutAccountInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => MessageCreateWithoutAccountInputObjectSchema),
        z.lazy(() => MessageUncheckedCreateWithoutAccountInputObjectSchema),
      ]),
    })
    .strict();

export const MessageUpsertWithWhereUniqueWithoutAccountInputObjectSchema =
  Schema;
