import { z } from 'zod';
import { AccountWhereUniqueInputObjectSchema } from './AccountWhereUniqueInput.schema';
import { AccountCreateWithoutMessagesInputObjectSchema } from './AccountCreateWithoutMessagesInput.schema';
import { AccountUncheckedCreateWithoutMessagesInputObjectSchema } from './AccountUncheckedCreateWithoutMessagesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountCreateOrConnectWithoutMessagesInput> = z
  .object({
    where: z.lazy(() => AccountWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => AccountCreateWithoutMessagesInputObjectSchema),
      z.lazy(() => AccountUncheckedCreateWithoutMessagesInputObjectSchema),
    ]),
  })
  .strict();

export const AccountCreateOrConnectWithoutMessagesInputObjectSchema = Schema;
