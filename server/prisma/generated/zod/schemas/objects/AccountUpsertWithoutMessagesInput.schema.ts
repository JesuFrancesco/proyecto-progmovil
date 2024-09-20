import { z } from 'zod';
import { AccountUpdateWithoutMessagesInputObjectSchema } from './AccountUpdateWithoutMessagesInput.schema';
import { AccountUncheckedUpdateWithoutMessagesInputObjectSchema } from './AccountUncheckedUpdateWithoutMessagesInput.schema';
import { AccountCreateWithoutMessagesInputObjectSchema } from './AccountCreateWithoutMessagesInput.schema';
import { AccountUncheckedCreateWithoutMessagesInputObjectSchema } from './AccountUncheckedCreateWithoutMessagesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountUpsertWithoutMessagesInput> = z
  .object({
    update: z.union([
      z.lazy(() => AccountUpdateWithoutMessagesInputObjectSchema),
      z.lazy(() => AccountUncheckedUpdateWithoutMessagesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => AccountCreateWithoutMessagesInputObjectSchema),
      z.lazy(() => AccountUncheckedCreateWithoutMessagesInputObjectSchema),
    ]),
  })
  .strict();

export const AccountUpsertWithoutMessagesInputObjectSchema = Schema;
