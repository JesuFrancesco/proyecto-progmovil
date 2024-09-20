import { z } from 'zod';
import { DepartmentoWhereUniqueInputObjectSchema } from './DepartmentoWhereUniqueInput.schema';
import { DepartmentoCreateWithoutProvinciasInputObjectSchema } from './DepartmentoCreateWithoutProvinciasInput.schema';
import { DepartmentoUncheckedCreateWithoutProvinciasInputObjectSchema } from './DepartmentoUncheckedCreateWithoutProvinciasInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DepartmentoCreateOrConnectWithoutProvinciasInput> =
  z
    .object({
      where: z.lazy(() => DepartmentoWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => DepartmentoCreateWithoutProvinciasInputObjectSchema),
        z.lazy(
          () => DepartmentoUncheckedCreateWithoutProvinciasInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const DepartmentoCreateOrConnectWithoutProvinciasInputObjectSchema =
  Schema;
