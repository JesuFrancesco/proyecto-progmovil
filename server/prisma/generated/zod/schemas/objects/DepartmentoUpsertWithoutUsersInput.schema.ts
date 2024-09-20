import { z } from 'zod';
import { DepartmentoUpdateWithoutUsersInputObjectSchema } from './DepartmentoUpdateWithoutUsersInput.schema';
import { DepartmentoUncheckedUpdateWithoutUsersInputObjectSchema } from './DepartmentoUncheckedUpdateWithoutUsersInput.schema';
import { DepartmentoCreateWithoutUsersInputObjectSchema } from './DepartmentoCreateWithoutUsersInput.schema';
import { DepartmentoUncheckedCreateWithoutUsersInputObjectSchema } from './DepartmentoUncheckedCreateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DepartmentoUpsertWithoutUsersInput> = z
  .object({
    update: z.union([
      z.lazy(() => DepartmentoUpdateWithoutUsersInputObjectSchema),
      z.lazy(() => DepartmentoUncheckedUpdateWithoutUsersInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => DepartmentoCreateWithoutUsersInputObjectSchema),
      z.lazy(() => DepartmentoUncheckedCreateWithoutUsersInputObjectSchema),
    ]),
  })
  .strict();

export const DepartmentoUpsertWithoutUsersInputObjectSchema = Schema;
