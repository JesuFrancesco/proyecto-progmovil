import { z } from 'zod';
import { UserCreateNestedOneWithoutAccountInputObjectSchema } from './UserCreateNestedOneWithoutAccountInput.schema';
import { MarketCreateNestedManyWithoutAccountInputObjectSchema } from './MarketCreateNestedManyWithoutAccountInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountCreateWithoutMessagesInput> = z
  .object({
    email: z.string(),
    role: z.string().optional(),
    password: z.string(),
    phone: z.string().optional().nullable(),
    name: z.string(),
    user: z
      .lazy(() => UserCreateNestedOneWithoutAccountInputObjectSchema)
      .optional(),
    markets: z
      .lazy(() => MarketCreateNestedManyWithoutAccountInputObjectSchema)
      .optional(),
  })
  .strict();

export const AccountCreateWithoutMessagesInputObjectSchema = Schema;
