import { z } from 'zod';
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageCreateWithoutAccountInputObjectSchema } from './MessageCreateWithoutAccountInput.schema';
import { MessageUncheckedCreateWithoutAccountInputObjectSchema } from './MessageUncheckedCreateWithoutAccountInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageCreateOrConnectWithoutAccountInput> = z
  .object({
    where: z.lazy(() => MessageWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => MessageCreateWithoutAccountInputObjectSchema),
      z.lazy(() => MessageUncheckedCreateWithoutAccountInputObjectSchema),
    ]),
  })
  .strict();

export const MessageCreateOrConnectWithoutAccountInputObjectSchema = Schema;
