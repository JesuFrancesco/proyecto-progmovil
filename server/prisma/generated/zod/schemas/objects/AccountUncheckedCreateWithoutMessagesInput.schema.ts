import { z } from 'zod';
import { UserUncheckedCreateNestedOneWithoutAccountInputObjectSchema } from './UserUncheckedCreateNestedOneWithoutAccountInput.schema';
import { MarketUncheckedCreateNestedManyWithoutAccountInputObjectSchema } from './MarketUncheckedCreateNestedManyWithoutAccountInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountUncheckedCreateWithoutMessagesInput> = z
  .object({
    id: z.number().optional(),
    email: z.string(),
    role: z.string().optional(),
    password: z.string(),
    phone: z.string().optional().nullable(),
    name: z.string(),
    user: z
      .lazy(() => UserUncheckedCreateNestedOneWithoutAccountInputObjectSchema)
      .optional(),
    markets: z
      .lazy(
        () => MarketUncheckedCreateNestedManyWithoutAccountInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const AccountUncheckedCreateWithoutMessagesInputObjectSchema = Schema;
