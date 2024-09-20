import { z } from 'zod';
import { DepartmentoCreateWithoutUsersInputObjectSchema } from './DepartmentoCreateWithoutUsersInput.schema';
import { DepartmentoUncheckedCreateWithoutUsersInputObjectSchema } from './DepartmentoUncheckedCreateWithoutUsersInput.schema';
import { DepartmentoCreateOrConnectWithoutUsersInputObjectSchema } from './DepartmentoCreateOrConnectWithoutUsersInput.schema';
import { DepartmentoUpsertWithoutUsersInputObjectSchema } from './DepartmentoUpsertWithoutUsersInput.schema';
import { DepartmentoWhereUniqueInputObjectSchema } from './DepartmentoWhereUniqueInput.schema';
import { DepartmentoUpdateWithoutUsersInputObjectSchema } from './DepartmentoUpdateWithoutUsersInput.schema';
import { DepartmentoUncheckedUpdateWithoutUsersInputObjectSchema } from './DepartmentoUncheckedUpdateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DepartmentoUpdateOneWithoutUsersNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => DepartmentoCreateWithoutUsersInputObjectSchema),
        z.lazy(() => DepartmentoUncheckedCreateWithoutUsersInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => DepartmentoCreateOrConnectWithoutUsersInputObjectSchema)
      .optional(),
    upsert: z
      .lazy(() => DepartmentoUpsertWithoutUsersInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => DepartmentoWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => DepartmentoUpdateWithoutUsersInputObjectSchema),
        z.lazy(() => DepartmentoUncheckedUpdateWithoutUsersInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const DepartmentoUpdateOneWithoutUsersNestedInputObjectSchema = Schema;
