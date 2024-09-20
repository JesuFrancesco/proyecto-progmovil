import { z } from 'zod';
import { ProvinciaCreateWithoutUsersInputObjectSchema } from './ProvinciaCreateWithoutUsersInput.schema';
import { ProvinciaUncheckedCreateWithoutUsersInputObjectSchema } from './ProvinciaUncheckedCreateWithoutUsersInput.schema';
import { ProvinciaCreateOrConnectWithoutUsersInputObjectSchema } from './ProvinciaCreateOrConnectWithoutUsersInput.schema';
import { ProvinciaWhereUniqueInputObjectSchema } from './ProvinciaWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProvinciaCreateNestedOneWithoutUsersInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ProvinciaCreateWithoutUsersInputObjectSchema),
        z.lazy(() => ProvinciaUncheckedCreateWithoutUsersInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ProvinciaCreateOrConnectWithoutUsersInputObjectSchema)
      .optional(),
    connect: z.lazy(() => ProvinciaWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ProvinciaCreateNestedOneWithoutUsersInputObjectSchema = Schema;
