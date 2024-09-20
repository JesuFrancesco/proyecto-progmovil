import { z } from 'zod';
import { DistritoScalarWhereInputObjectSchema } from './DistritoScalarWhereInput.schema';
import { DistritoUpdateManyMutationInputObjectSchema } from './DistritoUpdateManyMutationInput.schema';
import { DistritoUncheckedUpdateManyWithoutDistritosInputObjectSchema } from './DistritoUncheckedUpdateManyWithoutDistritosInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DistritoUpdateManyWithWhereWithoutProvinciaInput> =
  z
    .object({
      where: z.lazy(() => DistritoScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => DistritoUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => DistritoUncheckedUpdateManyWithoutDistritosInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const DistritoUpdateManyWithWhereWithoutProvinciaInputObjectSchema =
  Schema;
