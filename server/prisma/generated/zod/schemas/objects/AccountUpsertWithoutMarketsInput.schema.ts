import { z } from 'zod';
import { AccountUpdateWithoutMarketsInputObjectSchema } from './AccountUpdateWithoutMarketsInput.schema';
import { AccountUncheckedUpdateWithoutMarketsInputObjectSchema } from './AccountUncheckedUpdateWithoutMarketsInput.schema';
import { AccountCreateWithoutMarketsInputObjectSchema } from './AccountCreateWithoutMarketsInput.schema';
import { AccountUncheckedCreateWithoutMarketsInputObjectSchema } from './AccountUncheckedCreateWithoutMarketsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountUpsertWithoutMarketsInput> = z
  .object({
    update: z.union([
      z.lazy(() => AccountUpdateWithoutMarketsInputObjectSchema),
      z.lazy(() => AccountUncheckedUpdateWithoutMarketsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => AccountCreateWithoutMarketsInputObjectSchema),
      z.lazy(() => AccountUncheckedCreateWithoutMarketsInputObjectSchema),
    ]),
  })
  .strict();

export const AccountUpsertWithoutMarketsInputObjectSchema = Schema;
