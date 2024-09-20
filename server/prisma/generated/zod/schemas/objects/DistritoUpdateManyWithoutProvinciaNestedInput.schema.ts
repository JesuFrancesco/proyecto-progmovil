import { z } from 'zod';
import { DistritoCreateWithoutProvinciaInputObjectSchema } from './DistritoCreateWithoutProvinciaInput.schema';
import { DistritoUncheckedCreateWithoutProvinciaInputObjectSchema } from './DistritoUncheckedCreateWithoutProvinciaInput.schema';
import { DistritoCreateOrConnectWithoutProvinciaInputObjectSchema } from './DistritoCreateOrConnectWithoutProvinciaInput.schema';
import { DistritoUpsertWithWhereUniqueWithoutProvinciaInputObjectSchema } from './DistritoUpsertWithWhereUniqueWithoutProvinciaInput.schema';
import { DistritoWhereUniqueInputObjectSchema } from './DistritoWhereUniqueInput.schema';
import { DistritoUpdateWithWhereUniqueWithoutProvinciaInputObjectSchema } from './DistritoUpdateWithWhereUniqueWithoutProvinciaInput.schema';
import { DistritoUpdateManyWithWhereWithoutProvinciaInputObjectSchema } from './DistritoUpdateManyWithWhereWithoutProvinciaInput.schema';
import { DistritoScalarWhereInputObjectSchema } from './DistritoScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DistritoUpdateManyWithoutProvinciaNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              DistritoUpsertWithWhereUniqueWithoutProvinciaInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                DistritoUpsertWithWhereUniqueWithoutProvinciaInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => DistritoWhereUniqueInputObjectSchema),
          z.lazy(() => DistritoWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => DistritoWhereUniqueInputObjectSchema),
          z.lazy(() => DistritoWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => DistritoWhereUniqueInputObjectSchema),
          z.lazy(() => DistritoWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => DistritoWhereUniqueInputObjectSchema),
          z.lazy(() => DistritoWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              DistritoUpdateWithWhereUniqueWithoutProvinciaInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                DistritoUpdateWithWhereUniqueWithoutProvinciaInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => DistritoUpdateManyWithWhereWithoutProvinciaInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                DistritoUpdateManyWithWhereWithoutProvinciaInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => DistritoScalarWhereInputObjectSchema),
          z.lazy(() => DistritoScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const DistritoUpdateManyWithoutProvinciaNestedInputObjectSchema = Schema;
