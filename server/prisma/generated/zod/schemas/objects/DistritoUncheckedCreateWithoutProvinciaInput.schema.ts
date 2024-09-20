import { z } from 'zod';
import { UserUncheckedCreateNestedManyWithoutDistritoInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutDistritoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DistritoUncheckedCreateWithoutProvinciaInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    users: z
      .lazy(() => UserUncheckedCreateNestedManyWithoutDistritoInputObjectSchema)
      .optional(),
  })
  .strict();

export const DistritoUncheckedCreateWithoutProvinciaInputObjectSchema = Schema;
