import { z } from 'zod';
import { DepartmentoCreateWithoutUsersInputObjectSchema } from './DepartmentoCreateWithoutUsersInput.schema';
import { DepartmentoUncheckedCreateWithoutUsersInputObjectSchema } from './DepartmentoUncheckedCreateWithoutUsersInput.schema';
import { DepartmentoCreateOrConnectWithoutUsersInputObjectSchema } from './DepartmentoCreateOrConnectWithoutUsersInput.schema';
import { DepartmentoWhereUniqueInputObjectSchema } from './DepartmentoWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DepartmentoCreateNestedOneWithoutUsersInput> = z
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
    connect: z.lazy(() => DepartmentoWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const DepartmentoCreateNestedOneWithoutUsersInputObjectSchema = Schema;
