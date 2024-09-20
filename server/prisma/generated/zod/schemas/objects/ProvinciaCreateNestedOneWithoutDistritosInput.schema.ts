import { z } from 'zod';
import { ProvinciaCreateWithoutDistritosInputObjectSchema } from './ProvinciaCreateWithoutDistritosInput.schema';
import { ProvinciaUncheckedCreateWithoutDistritosInputObjectSchema } from './ProvinciaUncheckedCreateWithoutDistritosInput.schema';
import { ProvinciaCreateOrConnectWithoutDistritosInputObjectSchema } from './ProvinciaCreateOrConnectWithoutDistritosInput.schema';
import { ProvinciaWhereUniqueInputObjectSchema } from './ProvinciaWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProvinciaCreateNestedOneWithoutDistritosInput> =
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
      connect: z.lazy(() => ProvinciaWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const ProvinciaCreateNestedOneWithoutDistritosInputObjectSchema = Schema;
