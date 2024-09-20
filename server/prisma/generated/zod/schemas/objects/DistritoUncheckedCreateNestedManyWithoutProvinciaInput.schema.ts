import { z } from 'zod';
import { DistritoCreateWithoutProvinciaInputObjectSchema } from './DistritoCreateWithoutProvinciaInput.schema';
import { DistritoUncheckedCreateWithoutProvinciaInputObjectSchema } from './DistritoUncheckedCreateWithoutProvinciaInput.schema';
import { DistritoCreateOrConnectWithoutProvinciaInputObjectSchema } from './DistritoCreateOrConnectWithoutProvinciaInput.schema';
import { DistritoWhereUniqueInputObjectSchema } from './DistritoWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DistritoUncheckedCreateNestedManyWithoutProvinciaInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DistritoCreateWithoutProvinciaInputObjectSchema),
          z.lazy(() => DistritoCreateWithoutProvinciaInputObjectSchema).array(),
          z.lazy(
            () => DistritoUncheckedCreateWithoutProvinciaInputObjectSchema,
          ),
          z
            .lazy(
              () => DistritoUncheckedCreateWithoutProvinciaInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => DistritoCreateOrConnectWithoutProvinciaInputObjectSchema,
          ),
          z
            .lazy(
              () => DistritoCreateOrConnectWithoutProvinciaInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => DistritoWhereUniqueInputObjectSchema),
          z.lazy(() => DistritoWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const DistritoUncheckedCreateNestedManyWithoutProvinciaInputObjectSchema =
  Schema;
