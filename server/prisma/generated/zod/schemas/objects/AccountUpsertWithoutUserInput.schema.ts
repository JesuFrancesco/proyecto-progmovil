import { z } from 'zod';
import { AccountUpdateWithoutUserInputObjectSchema } from './AccountUpdateWithoutUserInput.schema';
import { AccountUncheckedUpdateWithoutUserInputObjectSchema } from './AccountUncheckedUpdateWithoutUserInput.schema';
import { AccountCreateWithoutUserInputObjectSchema } from './AccountCreateWithoutUserInput.schema';
import { AccountUncheckedCreateWithoutUserInputObjectSchema } from './AccountUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountUpsertWithoutUserInput> = z
  .object({
    update: z.union([
      z.lazy(() => AccountUpdateWithoutUserInputObjectSchema),
      z.lazy(() => AccountUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => AccountCreateWithoutUserInputObjectSchema),
      z.lazy(() => AccountUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const AccountUpsertWithoutUserInputObjectSchema = Schema;
