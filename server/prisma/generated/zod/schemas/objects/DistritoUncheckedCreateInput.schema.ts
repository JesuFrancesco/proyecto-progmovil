import { z } from 'zod';
import { UserUncheckedCreateNestedManyWithoutDistritoInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutDistritoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DistritoUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    provinciaId: z.number(),
    users: z
      .lazy(() => UserUncheckedCreateNestedManyWithoutDistritoInputObjectSchema)
      .optional(),
  })
  .strict();

export const DistritoUncheckedCreateInputObjectSchema = Schema;
