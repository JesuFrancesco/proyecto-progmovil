import { z } from 'zod';
import { DepartmentoCreateNestedOneWithoutProvinciasInputObjectSchema } from './DepartmentoCreateNestedOneWithoutProvinciasInput.schema';
import { DistritoCreateNestedManyWithoutProvinciaInputObjectSchema } from './DistritoCreateNestedManyWithoutProvinciaInput.schema';
import { UserCreateNestedManyWithoutProvinciaInputObjectSchema } from './UserCreateNestedManyWithoutProvinciaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProvinciaCreateInput> = z
  .object({
    name: z.string(),
    departmento: z.lazy(
      () => DepartmentoCreateNestedOneWithoutProvinciasInputObjectSchema,
    ),
    distritos: z
      .lazy(() => DistritoCreateNestedManyWithoutProvinciaInputObjectSchema)
      .optional(),
    users: z
      .lazy(() => UserCreateNestedManyWithoutProvinciaInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProvinciaCreateInputObjectSchema = Schema;
