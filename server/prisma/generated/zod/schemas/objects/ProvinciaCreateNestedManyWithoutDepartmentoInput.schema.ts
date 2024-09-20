import { z } from 'zod';
import { ProvinciaCreateWithoutDepartmentoInputObjectSchema } from './ProvinciaCreateWithoutDepartmentoInput.schema';
import { ProvinciaUncheckedCreateWithoutDepartmentoInputObjectSchema } from './ProvinciaUncheckedCreateWithoutDepartmentoInput.schema';
import { ProvinciaCreateOrConnectWithoutDepartmentoInputObjectSchema } from './ProvinciaCreateOrConnectWithoutDepartmentoInput.schema';
import { ProvinciaWhereUniqueInputObjectSchema } from './ProvinciaWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProvinciaCreateNestedManyWithoutDepartmentoInput> =
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
      connect: z
        .union([
          z.lazy(() => ProvinciaWhereUniqueInputObjectSchema),
          z.lazy(() => ProvinciaWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ProvinciaCreateNestedManyWithoutDepartmentoInputObjectSchema =
  Schema;
