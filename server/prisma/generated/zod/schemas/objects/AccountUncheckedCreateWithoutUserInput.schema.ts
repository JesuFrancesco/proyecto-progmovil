import { z } from 'zod';
import { MarketUncheckedCreateNestedManyWithoutAccountInputObjectSchema } from './MarketUncheckedCreateNestedManyWithoutAccountInput.schema';
import { MessageUncheckedCreateNestedManyWithoutAccountInputObjectSchema } from './MessageUncheckedCreateNestedManyWithoutAccountInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountUncheckedCreateWithoutUserInput> = z
  .object({
    id: z.number().optional(),
    email: z.string(),
    role: z.string().optional(),
    password: z.string(),
    phone: z.string().optional().nullable(),
    name: z.string(),
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

export const AccountUncheckedCreateWithoutUserInputObjectSchema = Schema;
