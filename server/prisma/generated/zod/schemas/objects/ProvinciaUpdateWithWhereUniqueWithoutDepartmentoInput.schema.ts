import { z } from 'zod';
import { ProvinciaWhereUniqueInputObjectSchema } from './ProvinciaWhereUniqueInput.schema';
import { ProvinciaUpdateWithoutDepartmentoInputObjectSchema } from './ProvinciaUpdateWithoutDepartmentoInput.schema';
import { ProvinciaUncheckedUpdateWithoutDepartmentoInputObjectSchema } from './ProvinciaUncheckedUpdateWithoutDepartmentoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProvinciaUpdateWithWhereUniqueWithoutDepartmentoInput> =
  z
    .object({
      where: z.lazy(() => ProvinciaWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ProvinciaUpdateWithoutDepartmentoInputObjectSchema),
        z.lazy(
          () => ProvinciaUncheckedUpdateWithoutDepartmentoInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProvinciaUpdateWithWhereUniqueWithoutDepartmentoInputObjectSchema =
  Schema;
