import { z } from 'zod';
import { AccountCreateWithoutMessagesInputObjectSchema } from './AccountCreateWithoutMessagesInput.schema';
import { AccountUncheckedCreateWithoutMessagesInputObjectSchema } from './AccountUncheckedCreateWithoutMessagesInput.schema';
import { AccountCreateOrConnectWithoutMessagesInputObjectSchema } from './AccountCreateOrConnectWithoutMessagesInput.schema';
import { AccountUpsertWithoutMessagesInputObjectSchema } from './AccountUpsertWithoutMessagesInput.schema';
import { AccountWhereUniqueInputObjectSchema } from './AccountWhereUniqueInput.schema';
import { AccountUpdateWithoutMessagesInputObjectSchema } from './AccountUpdateWithoutMessagesInput.schema';
import { AccountUncheckedUpdateWithoutMessagesInputObjectSchema } from './AccountUncheckedUpdateWithoutMessagesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountUpdateOneRequiredWithoutMessagesNestedInput> =
  z
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
      upsert: z
        .lazy(() => AccountUpsertWithoutMessagesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => AccountWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => AccountUpdateWithoutMessagesInputObjectSchema),
          z.lazy(() => AccountUncheckedUpdateWithoutMessagesInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const AccountUpdateOneRequiredWithoutMessagesNestedInputObjectSchema =
  Schema;
