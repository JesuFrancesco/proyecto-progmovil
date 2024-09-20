import { z } from 'zod';
import { UserCreateNestedOneWithoutAccountInputObjectSchema } from './UserCreateNestedOneWithoutAccountInput.schema';
import { MessageCreateNestedManyWithoutAccountInputObjectSchema } from './MessageCreateNestedManyWithoutAccountInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountCreateWithoutMarketsInput> = z
  .object({
    email: z.string(),
    role: z.string().optional(),
    password: z.string(),
    phone: z.string().optional().nullable(),
    name: z.string(),
    user: z
      .lazy(() => UserCreateNestedOneWithoutAccountInputObjectSchema)
      .optional(),
    messages: z
      .lazy(() => MessageCreateNestedManyWithoutAccountInputObjectSchema)
      .optional(),
  })
  .strict();

export const AccountCreateWithoutMarketsInputObjectSchema = Schema;
