import { z } from 'zod';
import { ProvinciaWhereUniqueInputObjectSchema } from './ProvinciaWhereUniqueInput.schema';
import { ProvinciaCreateWithoutDepartmentoInputObjectSchema } from './ProvinciaCreateWithoutDepartmentoInput.schema';
import { ProvinciaUncheckedCreateWithoutDepartmentoInputObjectSchema } from './ProvinciaUncheckedCreateWithoutDepartmentoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProvinciaCreateOrConnectWithoutDepartmentoInput> =
  z
    .object({
      where: z.lazy(() => ProvinciaWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ProvinciaCreateWithoutDepartmentoInputObjectSchema),
        z.lazy(
          () => ProvinciaUncheckedCreateWithoutDepartmentoInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProvinciaCreateOrConnectWithoutDepartmentoInputObjectSchema =
  Schema;
