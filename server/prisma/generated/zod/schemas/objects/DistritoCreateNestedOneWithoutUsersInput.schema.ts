import { z } from 'zod';
import { DistritoCreateWithoutUsersInputObjectSchema } from './DistritoCreateWithoutUsersInput.schema';
import { DistritoUncheckedCreateWithoutUsersInputObjectSchema } from './DistritoUncheckedCreateWithoutUsersInput.schema';
import { DistritoCreateOrConnectWithoutUsersInputObjectSchema } from './DistritoCreateOrConnectWithoutUsersInput.schema';
import { DistritoWhereUniqueInputObjectSchema } from './DistritoWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DistritoCreateNestedOneWithoutUsersInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => DistritoCreateWithoutUsersInputObjectSchema),
        z.lazy(() => DistritoUncheckedCreateWithoutUsersInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => DistritoCreateOrConnectWithoutUsersInputObjectSchema)
      .optional(),
    connect: z.lazy(() => DistritoWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const DistritoCreateNestedOneWithoutUsersInputObjectSchema = Schema;
