import { z } from 'zod';
import { ProvinciaCreateNestedOneWithoutDistritosInputObjectSchema } from './ProvinciaCreateNestedOneWithoutDistritosInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DistritoCreateWithoutUsersInput> = z
  .object({
    name: z.string(),
    provincia: z.lazy(
      () => ProvinciaCreateNestedOneWithoutDistritosInputObjectSchema,
    ),
  })
  .strict();

export const DistritoCreateWithoutUsersInputObjectSchema = Schema;
