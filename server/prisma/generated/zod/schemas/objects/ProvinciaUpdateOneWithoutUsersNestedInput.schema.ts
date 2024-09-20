import { z } from 'zod';
import { ProvinciaCreateWithoutUsersInputObjectSchema } from './ProvinciaCreateWithoutUsersInput.schema';
import { ProvinciaUncheckedCreateWithoutUsersInputObjectSchema } from './ProvinciaUncheckedCreateWithoutUsersInput.schema';
import { ProvinciaCreateOrConnectWithoutUsersInputObjectSchema } from './ProvinciaCreateOrConnectWithoutUsersInput.schema';
import { ProvinciaUpsertWithoutUsersInputObjectSchema } from './ProvinciaUpsertWithoutUsersInput.schema';
import { ProvinciaWhereUniqueInputObjectSchema } from './ProvinciaWhereUniqueInput.schema';
import { ProvinciaUpdateWithoutUsersInputObjectSchema } from './ProvinciaUpdateWithoutUsersInput.schema';
import { ProvinciaUncheckedUpdateWithoutUsersInputObjectSchema } from './ProvinciaUncheckedUpdateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProvinciaUpdateOneWithoutUsersNestedInput> = z
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
    upsert: z
      .lazy(() => ProvinciaUpsertWithoutUsersInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => ProvinciaWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => ProvinciaUpdateWithoutUsersInputObjectSchema),
        z.lazy(() => ProvinciaUncheckedUpdateWithoutUsersInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ProvinciaUpdateOneWithoutUsersNestedInputObjectSchema = Schema;
