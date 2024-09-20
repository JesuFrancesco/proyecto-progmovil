import { z } from 'zod';
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageUpdateWithoutAccountInputObjectSchema } from './MessageUpdateWithoutAccountInput.schema';
import { MessageUncheckedUpdateWithoutAccountInputObjectSchema } from './MessageUncheckedUpdateWithoutAccountInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageUpdateWithWhereUniqueWithoutAccountInput> =
  z
    .object({
      where: z.lazy(() => MessageWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => MessageUpdateWithoutAccountInputObjectSchema),
        z.lazy(() => MessageUncheckedUpdateWithoutAccountInputObjectSchema),
      ]),
    })
    .strict();

export const MessageUpdateWithWhereUniqueWithoutAccountInputObjectSchema =
  Schema;
