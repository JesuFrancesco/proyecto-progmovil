import { z } from 'zod';
import { AccountWhereUniqueInputObjectSchema } from './AccountWhereUniqueInput.schema';
import { AccountCreateWithoutMarketsInputObjectSchema } from './AccountCreateWithoutMarketsInput.schema';
import { AccountUncheckedCreateWithoutMarketsInputObjectSchema } from './AccountUncheckedCreateWithoutMarketsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountCreateOrConnectWithoutMarketsInput> = z
  .object({
    where: z.lazy(() => AccountWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => AccountCreateWithoutMarketsInputObjectSchema),
      z.lazy(() => AccountUncheckedCreateWithoutMarketsInputObjectSchema),
    ]),
  })
  .strict();

export const AccountCreateOrConnectWithoutMarketsInputObjectSchema = Schema;
