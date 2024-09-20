import { z } from 'zod';
import { DistritoWhereUniqueInputObjectSchema } from './DistritoWhereUniqueInput.schema';
import { DistritoCreateWithoutUsersInputObjectSchema } from './DistritoCreateWithoutUsersInput.schema';
import { DistritoUncheckedCreateWithoutUsersInputObjectSchema } from './DistritoUncheckedCreateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DistritoCreateOrConnectWithoutUsersInput> = z
  .object({
    where: z.lazy(() => DistritoWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => DistritoCreateWithoutUsersInputObjectSchema),
      z.lazy(() => DistritoUncheckedCreateWithoutUsersInputObjectSchema),
    ]),
  })
  .strict();

export const DistritoCreateOrConnectWithoutUsersInputObjectSchema = Schema;
