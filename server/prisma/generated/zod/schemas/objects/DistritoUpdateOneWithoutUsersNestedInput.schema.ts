import { z } from 'zod';
import { DistritoCreateWithoutUsersInputObjectSchema } from './DistritoCreateWithoutUsersInput.schema';
import { DistritoUncheckedCreateWithoutUsersInputObjectSchema } from './DistritoUncheckedCreateWithoutUsersInput.schema';
import { DistritoCreateOrConnectWithoutUsersInputObjectSchema } from './DistritoCreateOrConnectWithoutUsersInput.schema';
import { DistritoUpsertWithoutUsersInputObjectSchema } from './DistritoUpsertWithoutUsersInput.schema';
import { DistritoWhereUniqueInputObjectSchema } from './DistritoWhereUniqueInput.schema';
import { DistritoUpdateWithoutUsersInputObjectSchema } from './DistritoUpdateWithoutUsersInput.schema';
import { DistritoUncheckedUpdateWithoutUsersInputObjectSchema } from './DistritoUncheckedUpdateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DistritoUpdateOneWithoutUsersNestedInput> = z
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
    upsert: z
      .lazy(() => DistritoUpsertWithoutUsersInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => DistritoWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => DistritoUpdateWithoutUsersInputObjectSchema),
        z.lazy(() => DistritoUncheckedUpdateWithoutUsersInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const DistritoUpdateOneWithoutUsersNestedInputObjectSchema = Schema;
