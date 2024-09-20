import { z } from 'zod';
import { AccountCreateWithoutMessagesInputObjectSchema } from './AccountCreateWithoutMessagesInput.schema';
import { AccountUncheckedCreateWithoutMessagesInputObjectSchema } from './AccountUncheckedCreateWithoutMessagesInput.schema';
import { AccountCreateOrConnectWithoutMessagesInputObjectSchema } from './AccountCreateOrConnectWithoutMessagesInput.schema';
import { AccountWhereUniqueInputObjectSchema } from './AccountWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountCreateNestedOneWithoutMessagesInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => AccountCreateWithoutMessagesInputObjectSchema),
        z.lazy(() => AccountUncheckedCreateWithoutMessagesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => AccountCreateOrConnectWithoutMessagesInputObjectSchema)
      .optional(),
    connect: z.lazy(() => AccountWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const AccountCreateNestedOneWithoutMessagesInputObjectSchema = Schema;
