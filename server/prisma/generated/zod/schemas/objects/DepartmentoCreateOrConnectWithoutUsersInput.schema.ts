import { z } from 'zod';
import { DepartmentoWhereUniqueInputObjectSchema } from './DepartmentoWhereUniqueInput.schema';
import { DepartmentoCreateWithoutUsersInputObjectSchema } from './DepartmentoCreateWithoutUsersInput.schema';
import { DepartmentoUncheckedCreateWithoutUsersInputObjectSchema } from './DepartmentoUncheckedCreateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DepartmentoCreateOrConnectWithoutUsersInput> = z
  .object({
    where: z.lazy(() => DepartmentoWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => DepartmentoCreateWithoutUsersInputObjectSchema),
      z.lazy(() => DepartmentoUncheckedCreateWithoutUsersInputObjectSchema),
    ]),
  })
  .strict();

export const DepartmentoCreateOrConnectWithoutUsersInputObjectSchema = Schema;
