import { z } from 'zod';
import { DepartmentoCreateNestedOneWithoutProvinciasInputObjectSchema } from './DepartmentoCreateNestedOneWithoutProvinciasInput.schema';
import { UserCreateNestedManyWithoutProvinciaInputObjectSchema } from './UserCreateNestedManyWithoutProvinciaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProvinciaCreateWithoutDistritosInput> = z
  .object({
    name: z.string(),
    departmento: z.lazy(
      () => DepartmentoCreateNestedOneWithoutProvinciasInputObjectSchema,
    ),
    users: z
      .lazy(() => UserCreateNestedManyWithoutProvinciaInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProvinciaCreateWithoutDistritosInputObjectSchema = Schema;
