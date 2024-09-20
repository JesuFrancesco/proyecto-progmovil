import { z } from 'zod';
import { AccountCreateWithoutUserInputObjectSchema } from './AccountCreateWithoutUserInput.schema';
import { AccountUncheckedCreateWithoutUserInputObjectSchema } from './AccountUncheckedCreateWithoutUserInput.schema';
import { AccountCreateOrConnectWithoutUserInputObjectSchema } from './AccountCreateOrConnectWithoutUserInput.schema';
import { AccountUpsertWithoutUserInputObjectSchema } from './AccountUpsertWithoutUserInput.schema';
import { AccountWhereUniqueInputObjectSchema } from './AccountWhereUniqueInput.schema';
import { AccountUpdateWithoutUserInputObjectSchema } from './AccountUpdateWithoutUserInput.schema';
import { AccountUncheckedUpdateWithoutUserInputObjectSchema } from './AccountUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountUpdateOneRequiredWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => AccountCreateWithoutUserInputObjectSchema),
          z.lazy(() => AccountUncheckedCreateWithoutUserInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => AccountCreateOrConnectWithoutUserInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => AccountUpsertWithoutUserInputObjectSchema)
        .optional(),
      connect: z.lazy(() => AccountWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => AccountUpdateWithoutUserInputObjectSchema),
          z.lazy(() => AccountUncheckedUpdateWithoutUserInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const AccountUpdateOneRequiredWithoutUserNestedInputObjectSchema =
  Schema;
