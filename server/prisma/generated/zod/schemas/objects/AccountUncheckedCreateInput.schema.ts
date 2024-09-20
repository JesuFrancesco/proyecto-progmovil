import { z } from 'zod';
import { UserUncheckedCreateNestedOneWithoutAccountInputObjectSchema } from './UserUncheckedCreateNestedOneWithoutAccountInput.schema';
import { MarketUncheckedCreateNestedManyWithoutAccountInputObjectSchema } from './MarketUncheckedCreateNestedManyWithoutAccountInput.schema';
import { MessageUncheckedCreateNestedManyWithoutAccountInputObjectSchema } from './MessageUncheckedCreateNestedManyWithoutAccountInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountUncheckedCreateInput> = z
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
    messages: z
      .lazy(
        () => MessageUncheckedCreateNestedManyWithoutAccountInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const AccountUncheckedCreateInputObjectSchema = Schema;
