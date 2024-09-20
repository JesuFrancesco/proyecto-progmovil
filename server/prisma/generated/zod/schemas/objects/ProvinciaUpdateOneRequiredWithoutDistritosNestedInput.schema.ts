import { z } from 'zod';
import { ProvinciaCreateWithoutDistritosInputObjectSchema } from './ProvinciaCreateWithoutDistritosInput.schema';
import { ProvinciaUncheckedCreateWithoutDistritosInputObjectSchema } from './ProvinciaUncheckedCreateWithoutDistritosInput.schema';
import { ProvinciaCreateOrConnectWithoutDistritosInputObjectSchema } from './ProvinciaCreateOrConnectWithoutDistritosInput.schema';
import { ProvinciaUpsertWithoutDistritosInputObjectSchema } from './ProvinciaUpsertWithoutDistritosInput.schema';
import { ProvinciaWhereUniqueInputObjectSchema } from './ProvinciaWhereUniqueInput.schema';
import { ProvinciaUpdateWithoutDistritosInputObjectSchema } from './ProvinciaUpdateWithoutDistritosInput.schema';
import { ProvinciaUncheckedUpdateWithoutDistritosInputObjectSchema } from './ProvinciaUncheckedUpdateWithoutDistritosInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProvinciaUpdateOneRequiredWithoutDistritosNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProvinciaCreateWithoutDistritosInputObjectSchema),
          z.lazy(
            () => ProvinciaUncheckedCreateWithoutDistritosInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ProvinciaCreateOrConnectWithoutDistritosInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => ProvinciaUpsertWithoutDistritosInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ProvinciaWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ProvinciaUpdateWithoutDistritosInputObjectSchema),
          z.lazy(
            () => ProvinciaUncheckedUpdateWithoutDistritosInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const ProvinciaUpdateOneRequiredWithoutDistritosNestedInputObjectSchema =
  Schema;
