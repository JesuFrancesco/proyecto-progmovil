import { z } from 'zod';
import { ProvinciaUpdateWithoutUsersInputObjectSchema } from './ProvinciaUpdateWithoutUsersInput.schema';
import { ProvinciaUncheckedUpdateWithoutUsersInputObjectSchema } from './ProvinciaUncheckedUpdateWithoutUsersInput.schema';
import { ProvinciaCreateWithoutUsersInputObjectSchema } from './ProvinciaCreateWithoutUsersInput.schema';
import { ProvinciaUncheckedCreateWithoutUsersInputObjectSchema } from './ProvinciaUncheckedCreateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProvinciaUpsertWithoutUsersInput> = z
  .object({
    update: z.union([
      z.lazy(() => ProvinciaUpdateWithoutUsersInputObjectSchema),
      z.lazy(() => ProvinciaUncheckedUpdateWithoutUsersInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ProvinciaCreateWithoutUsersInputObjectSchema),
      z.lazy(() => ProvinciaUncheckedCreateWithoutUsersInputObjectSchema),
    ]),
  })
  .strict();

export const ProvinciaUpsertWithoutUsersInputObjectSchema = Schema;
