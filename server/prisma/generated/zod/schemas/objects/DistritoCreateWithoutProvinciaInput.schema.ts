import { z } from 'zod';
import { UserCreateNestedManyWithoutDistritoInputObjectSchema } from './UserCreateNestedManyWithoutDistritoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DistritoCreateWithoutProvinciaInput> = z
  .object({
    name: z.string(),
    users: z
      .lazy(() => UserCreateNestedManyWithoutDistritoInputObjectSchema)
      .optional(),
  })
  .strict();

export const DistritoCreateWithoutProvinciaInputObjectSchema = Schema;
