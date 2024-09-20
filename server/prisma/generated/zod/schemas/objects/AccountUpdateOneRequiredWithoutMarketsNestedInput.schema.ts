import { z } from 'zod';
import { AccountCreateWithoutMarketsInputObjectSchema } from './AccountCreateWithoutMarketsInput.schema';
import { AccountUncheckedCreateWithoutMarketsInputObjectSchema } from './AccountUncheckedCreateWithoutMarketsInput.schema';
import { AccountCreateOrConnectWithoutMarketsInputObjectSchema } from './AccountCreateOrConnectWithoutMarketsInput.schema';
import { AccountUpsertWithoutMarketsInputObjectSchema } from './AccountUpsertWithoutMarketsInput.schema';
import { AccountWhereUniqueInputObjectSchema } from './AccountWhereUniqueInput.schema';
import { AccountUpdateWithoutMarketsInputObjectSchema } from './AccountUpdateWithoutMarketsInput.schema';
import { AccountUncheckedUpdateWithoutMarketsInputObjectSchema } from './AccountUncheckedUpdateWithoutMarketsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountUpdateOneRequiredWithoutMarketsNestedInput> =
  z
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
      upsert: z
        .lazy(() => AccountUpsertWithoutMarketsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => AccountWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => AccountUpdateWithoutMarketsInputObjectSchema),
          z.lazy(() => AccountUncheckedUpdateWithoutMarketsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const AccountUpdateOneRequiredWithoutMarketsNestedInputObjectSchema =
  Schema;
