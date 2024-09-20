import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutProvinciaInputObjectSchema } from './UserCreateWithoutProvinciaInput.schema';
import { UserUncheckedCreateWithoutProvinciaInputObjectSchema } from './UserUncheckedCreateWithoutProvinciaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutProvinciaInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutProvinciaInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutProvinciaInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutProvinciaInputObjectSchema = Schema;
