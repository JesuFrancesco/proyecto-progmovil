import { z } from 'zod';
import { AccountCreateWithoutUserInputObjectSchema } from './AccountCreateWithoutUserInput.schema';
import { AccountUncheckedCreateWithoutUserInputObjectSchema } from './AccountUncheckedCreateWithoutUserInput.schema';
import { AccountCreateOrConnectWithoutUserInputObjectSchema } from './AccountCreateOrConnectWithoutUserInput.schema';
import { AccountWhereUniqueInputObjectSchema } from './AccountWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountCreateNestedOneWithoutUserInput> = z
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
    connect: z.lazy(() => AccountWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const AccountCreateNestedOneWithoutUserInputObjectSchema = Schema;
