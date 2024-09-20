import { z } from 'zod';
import { DistritoWhereUniqueInputObjectSchema } from './DistritoWhereUniqueInput.schema';
import { DistritoUpdateWithoutProvinciaInputObjectSchema } from './DistritoUpdateWithoutProvinciaInput.schema';
import { DistritoUncheckedUpdateWithoutProvinciaInputObjectSchema } from './DistritoUncheckedUpdateWithoutProvinciaInput.schema';
import { DistritoCreateWithoutProvinciaInputObjectSchema } from './DistritoCreateWithoutProvinciaInput.schema';
import { DistritoUncheckedCreateWithoutProvinciaInputObjectSchema } from './DistritoUncheckedCreateWithoutProvinciaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DistritoUpsertWithWhereUniqueWithoutProvinciaInput> =
  z
    .object({
      where: z.lazy(() => DistritoWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => DistritoUpdateWithoutProvinciaInputObjectSchema),
        z.lazy(() => DistritoUncheckedUpdateWithoutProvinciaInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => DistritoCreateWithoutProvinciaInputObjectSchema),
        z.lazy(() => DistritoUncheckedCreateWithoutProvinciaInputObjectSchema),
      ]),
    })
    .strict();

export const DistritoUpsertWithWhereUniqueWithoutProvinciaInputObjectSchema =
  Schema;
