import { z } from 'zod';
import { DepartmentoCreateNestedOneWithoutProvinciasInputObjectSchema } from './DepartmentoCreateNestedOneWithoutProvinciasInput.schema';
import { DistritoCreateNestedManyWithoutProvinciaInputObjectSchema } from './DistritoCreateNestedManyWithoutProvinciaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProvinciaCreateWithoutUsersInput> = z
  .object({
    name: z.string(),
    departmento: z.lazy(
      () => DepartmentoCreateNestedOneWithoutProvinciasInputObjectSchema,
    ),
    distritos: z
      .lazy(() => DistritoCreateNestedManyWithoutProvinciaInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProvinciaCreateWithoutUsersInputObjectSchema = Schema;
