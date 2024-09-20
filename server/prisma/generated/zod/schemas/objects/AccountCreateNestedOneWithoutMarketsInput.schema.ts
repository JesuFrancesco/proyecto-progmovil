import { z } from 'zod';
import { AccountCreateWithoutMarketsInputObjectSchema } from './AccountCreateWithoutMarketsInput.schema';
import { AccountUncheckedCreateWithoutMarketsInputObjectSchema } from './AccountUncheckedCreateWithoutMarketsInput.schema';
import { AccountCreateOrConnectWithoutMarketsInputObjectSchema } from './AccountCreateOrConnectWithoutMarketsInput.schema';
import { AccountWhereUniqueInputObjectSchema } from './AccountWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountCreateNestedOneWithoutMarketsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => AccountCreateWithoutMarketsInputObjectSchema),
        z.lazy(() => AccountUncheckedCreateWithoutMarketsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => AccountCreateOrConnectWithoutMarketsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => AccountWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const AccountCreateNestedOneWithoutMarketsInputObjectSchema = Schema;
