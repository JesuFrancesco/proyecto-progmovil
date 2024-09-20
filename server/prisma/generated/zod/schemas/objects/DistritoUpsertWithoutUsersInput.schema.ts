import { z } from 'zod';
import { DistritoUpdateWithoutUsersInputObjectSchema } from './DistritoUpdateWithoutUsersInput.schema';
import { DistritoUncheckedUpdateWithoutUsersInputObjectSchema } from './DistritoUncheckedUpdateWithoutUsersInput.schema';
import { DistritoCreateWithoutUsersInputObjectSchema } from './DistritoCreateWithoutUsersInput.schema';
import { DistritoUncheckedCreateWithoutUsersInputObjectSchema } from './DistritoUncheckedCreateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DistritoUpsertWithoutUsersInput> = z
  .object({
    update: z.union([
      z.lazy(() => DistritoUpdateWithoutUsersInputObjectSchema),
      z.lazy(() => DistritoUncheckedUpdateWithoutUsersInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => DistritoCreateWithoutUsersInputObjectSchema),
      z.lazy(() => DistritoUncheckedCreateWithoutUsersInputObjectSchema),
    ]),
  })
  .strict();

export const DistritoUpsertWithoutUsersInputObjectSchema = Schema;
