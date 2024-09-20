import { z } from 'zod';
import { DepartmentoCreateWithoutProvinciasInputObjectSchema } from './DepartmentoCreateWithoutProvinciasInput.schema';
import { DepartmentoUncheckedCreateWithoutProvinciasInputObjectSchema } from './DepartmentoUncheckedCreateWithoutProvinciasInput.schema';
import { DepartmentoCreateOrConnectWithoutProvinciasInputObjectSchema } from './DepartmentoCreateOrConnectWithoutProvinciasInput.schema';
import { DepartmentoUpsertWithoutProvinciasInputObjectSchema } from './DepartmentoUpsertWithoutProvinciasInput.schema';
import { DepartmentoWhereUniqueInputObjectSchema } from './DepartmentoWhereUniqueInput.schema';
import { DepartmentoUpdateWithoutProvinciasInputObjectSchema } from './DepartmentoUpdateWithoutProvinciasInput.schema';
import { DepartmentoUncheckedUpdateWithoutProvinciasInputObjectSchema } from './DepartmentoUncheckedUpdateWithoutProvinciasInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DepartmentoUpdateOneRequiredWithoutProvinciasNestedInput> =
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
      upsert: z
        .lazy(() => DepartmentoUpsertWithoutProvinciasInputObjectSchema)
        .optional(),
      connect: z.lazy(() => DepartmentoWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => DepartmentoUpdateWithoutProvinciasInputObjectSchema),
          z.lazy(
            () => DepartmentoUncheckedUpdateWithoutProvinciasInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const DepartmentoUpdateOneRequiredWithoutProvinciasNestedInputObjectSchema =
  Schema;
