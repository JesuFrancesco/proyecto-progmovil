import { z } from 'zod';
import { DistritoWhereUniqueInputObjectSchema } from './DistritoWhereUniqueInput.schema';
import { DistritoUpdateWithoutProvinciaInputObjectSchema } from './DistritoUpdateWithoutProvinciaInput.schema';
import { DistritoUncheckedUpdateWithoutProvinciaInputObjectSchema } from './DistritoUncheckedUpdateWithoutProvinciaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DistritoUpdateWithWhereUniqueWithoutProvinciaInput> =
  z
    .object({
      where: z.lazy(() => DistritoWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => DistritoUpdateWithoutProvinciaInputObjectSchema),
        z.lazy(() => DistritoUncheckedUpdateWithoutProvinciaInputObjectSchema),
      ]),
    })
    .strict();

export const DistritoUpdateWithWhereUniqueWithoutProvinciaInputObjectSchema =
  Schema;
