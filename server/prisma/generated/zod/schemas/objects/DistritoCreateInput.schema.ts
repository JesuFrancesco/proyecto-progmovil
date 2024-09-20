import { z } from 'zod';
import { ProvinciaCreateNestedOneWithoutDistritosInputObjectSchema } from './ProvinciaCreateNestedOneWithoutDistritosInput.schema';
import { UserCreateNestedManyWithoutDistritoInputObjectSchema } from './UserCreateNestedManyWithoutDistritoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DistritoCreateInput> = z
  .object({
    name: z.string(),
    provincia: z.lazy(
      () => ProvinciaCreateNestedOneWithoutDistritosInputObjectSchema,
    ),
    users: z
      .lazy(() => UserCreateNestedManyWithoutDistritoInputObjectSchema)
      .optional(),
  })
  .strict();

export const DistritoCreateInputObjectSchema = Schema;
