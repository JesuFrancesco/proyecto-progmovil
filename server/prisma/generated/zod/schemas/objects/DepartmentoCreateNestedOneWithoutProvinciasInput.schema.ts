import { z } from 'zod';
import { DepartmentoCreateWithoutProvinciasInputObjectSchema } from './DepartmentoCreateWithoutProvinciasInput.schema';
import { DepartmentoUncheckedCreateWithoutProvinciasInputObjectSchema } from './DepartmentoUncheckedCreateWithoutProvinciasInput.schema';
import { DepartmentoCreateOrConnectWithoutProvinciasInputObjectSchema } from './DepartmentoCreateOrConnectWithoutProvinciasInput.schema';
import { DepartmentoWhereUniqueInputObjectSchema } from './DepartmentoWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DepartmentoCreateNestedOneWithoutProvinciasInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DepartmentoCreateWithoutProvinciasInputObjectSchema),
          z.lazy(
            () => DepartmentoUncheckedCreateWithoutProvinciasInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => DepartmentoCreateOrConnectWithoutProvinciasInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => DepartmentoWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const DepartmentoCreateNestedOneWithoutProvinciasInputObjectSchema =
  Schema;
