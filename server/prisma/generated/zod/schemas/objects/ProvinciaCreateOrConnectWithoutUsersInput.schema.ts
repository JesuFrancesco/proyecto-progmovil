import { z } from 'zod';
import { ProvinciaWhereUniqueInputObjectSchema } from './ProvinciaWhereUniqueInput.schema';
import { ProvinciaCreateWithoutUsersInputObjectSchema } from './ProvinciaCreateWithoutUsersInput.schema';
import { ProvinciaUncheckedCreateWithoutUsersInputObjectSchema } from './ProvinciaUncheckedCreateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProvinciaCreateOrConnectWithoutUsersInput> = z
  .object({
    where: z.lazy(() => ProvinciaWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ProvinciaCreateWithoutUsersInputObjectSchema),
      z.lazy(() => ProvinciaUncheckedCreateWithoutUsersInputObjectSchema),
    ]),
  })
  .strict();

export const ProvinciaCreateOrConnectWithoutUsersInputObjectSchema = Schema;
