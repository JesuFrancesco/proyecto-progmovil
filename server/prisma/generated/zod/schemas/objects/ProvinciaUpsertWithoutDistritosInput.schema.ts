import { z } from 'zod';
import { ProvinciaUpdateWithoutDistritosInputObjectSchema } from './ProvinciaUpdateWithoutDistritosInput.schema';
import { ProvinciaUncheckedUpdateWithoutDistritosInputObjectSchema } from './ProvinciaUncheckedUpdateWithoutDistritosInput.schema';
import { ProvinciaCreateWithoutDistritosInputObjectSchema } from './ProvinciaCreateWithoutDistritosInput.schema';
import { ProvinciaUncheckedCreateWithoutDistritosInputObjectSchema } from './ProvinciaUncheckedCreateWithoutDistritosInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProvinciaUpsertWithoutDistritosInput> = z
  .object({
    update: z.union([
      z.lazy(() => ProvinciaUpdateWithoutDistritosInputObjectSchema),
      z.lazy(() => ProvinciaUncheckedUpdateWithoutDistritosInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ProvinciaCreateWithoutDistritosInputObjectSchema),
      z.lazy(() => ProvinciaUncheckedCreateWithoutDistritosInputObjectSchema),
    ]),
  })
  .strict();

export const ProvinciaUpsertWithoutDistritosInputObjectSchema = Schema;
