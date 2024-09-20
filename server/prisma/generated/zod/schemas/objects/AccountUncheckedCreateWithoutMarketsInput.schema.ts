import { z } from 'zod';
import { UserUncheckedCreateNestedOneWithoutAccountInputObjectSchema } from './UserUncheckedCreateNestedOneWithoutAccountInput.schema';
import { MessageUncheckedCreateNestedManyWithoutAccountInputObjectSchema } from './MessageUncheckedCreateNestedManyWithoutAccountInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountUncheckedCreateWithoutMarketsInput> = z
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
    messages: z
      .lazy(
        () => MessageUncheckedCreateNestedManyWithoutAccountInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const AccountUncheckedCreateWithoutMarketsInputObjectSchema = Schema;
