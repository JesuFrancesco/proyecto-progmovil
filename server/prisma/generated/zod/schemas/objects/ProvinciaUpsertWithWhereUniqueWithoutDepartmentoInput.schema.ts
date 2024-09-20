import { z } from 'zod';
import { ProvinciaWhereUniqueInputObjectSchema } from './ProvinciaWhereUniqueInput.schema';
import { ProvinciaUpdateWithoutDepartmentoInputObjectSchema } from './ProvinciaUpdateWithoutDepartmentoInput.schema';
import { ProvinciaUncheckedUpdateWithoutDepartmentoInputObjectSchema } from './ProvinciaUncheckedUpdateWithoutDepartmentoInput.schema';
import { ProvinciaCreateWithoutDepartmentoInputObjectSchema } from './ProvinciaCreateWithoutDepartmentoInput.schema';
import { ProvinciaUncheckedCreateWithoutDepartmentoInputObjectSchema } from './ProvinciaUncheckedCreateWithoutDepartmentoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProvinciaUpsertWithWhereUniqueWithoutDepartmentoInput> =
  z
    .object({
      where: z.lazy(() => ProvinciaWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ProvinciaUpdateWithoutDepartmentoInputObjectSchema),
        z.lazy(
          () => ProvinciaUncheckedUpdateWithoutDepartmentoInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => ProvinciaCreateWithoutDepartmentoInputObjectSchema),
        z.lazy(
          () => ProvinciaUncheckedCreateWithoutDepartmentoInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProvinciaUpsertWithWhereUniqueWithoutDepartmentoInputObjectSchema =
  Schema;
