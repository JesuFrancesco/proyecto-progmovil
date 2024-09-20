import { z } from 'zod';
import { DistritoWhereUniqueInputObjectSchema } from './DistritoWhereUniqueInput.schema';
import { DistritoCreateWithoutProvinciaInputObjectSchema } from './DistritoCreateWithoutProvinciaInput.schema';
import { DistritoUncheckedCreateWithoutProvinciaInputObjectSchema } from './DistritoUncheckedCreateWithoutProvinciaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DistritoCreateOrConnectWithoutProvinciaInput> = z
  .object({
    where: z.lazy(() => DistritoWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => DistritoCreateWithoutProvinciaInputObjectSchema),
      z.lazy(() => DistritoUncheckedCreateWithoutProvinciaInputObjectSchema),
    ]),
  })
  .strict();

export const DistritoCreateOrConnectWithoutProvinciaInputObjectSchema = Schema;
