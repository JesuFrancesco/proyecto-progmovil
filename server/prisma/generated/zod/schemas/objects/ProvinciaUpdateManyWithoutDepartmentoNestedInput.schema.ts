import { z } from 'zod';
import { ProvinciaCreateWithoutDepartmentoInputObjectSchema } from './ProvinciaCreateWithoutDepartmentoInput.schema';
import { ProvinciaUncheckedCreateWithoutDepartmentoInputObjectSchema } from './ProvinciaUncheckedCreateWithoutDepartmentoInput.schema';
import { ProvinciaCreateOrConnectWithoutDepartmentoInputObjectSchema } from './ProvinciaCreateOrConnectWithoutDepartmentoInput.schema';
import { ProvinciaUpsertWithWhereUniqueWithoutDepartmentoInputObjectSchema } from './ProvinciaUpsertWithWhereUniqueWithoutDepartmentoInput.schema';
import { ProvinciaWhereUniqueInputObjectSchema } from './ProvinciaWhereUniqueInput.schema';
import { ProvinciaUpdateWithWhereUniqueWithoutDepartmentoInputObjectSchema } from './ProvinciaUpdateWithWhereUniqueWithoutDepartmentoInput.schema';
import { ProvinciaUpdateManyWithWhereWithoutDepartmentoInputObjectSchema } from './ProvinciaUpdateManyWithWhereWithoutDepartmentoInput.schema';
import { ProvinciaScalarWhereInputObjectSchema } from './ProvinciaScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProvinciaUpdateManyWithoutDepartmentoNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProvinciaCreateWithoutDepartmentoInputObjectSchema),
          z
            .lazy(() => ProvinciaCreateWithoutDepartmentoInputObjectSchema)
            .array(),
          z.lazy(
            () => ProvinciaUncheckedCreateWithoutDepartmentoInputObjectSchema,
          ),
          z
            .lazy(
              () => ProvinciaUncheckedCreateWithoutDepartmentoInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ProvinciaCreateOrConnectWithoutDepartmentoInputObjectSchema,
          ),
          z
            .lazy(
              () => ProvinciaCreateOrConnectWithoutDepartmentoInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ProvinciaUpsertWithWhereUniqueWithoutDepartmentoInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProvinciaUpsertWithWhereUniqueWithoutDepartmentoInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => ProvinciaWhereUniqueInputObjectSchema),
          z.lazy(() => ProvinciaWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ProvinciaWhereUniqueInputObjectSchema),
          z.lazy(() => ProvinciaWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ProvinciaWhereUniqueInputObjectSchema),
          z.lazy(() => ProvinciaWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ProvinciaWhereUniqueInputObjectSchema),
          z.lazy(() => ProvinciaWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ProvinciaUpdateWithWhereUniqueWithoutDepartmentoInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProvinciaUpdateWithWhereUniqueWithoutDepartmentoInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ProvinciaUpdateManyWithWhereWithoutDepartmentoInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProvinciaUpdateManyWithWhereWithoutDepartmentoInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ProvinciaScalarWhereInputObjectSchema),
          z.lazy(() => ProvinciaScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ProvinciaUpdateManyWithoutDepartmentoNestedInputObjectSchema =
  Schema;
