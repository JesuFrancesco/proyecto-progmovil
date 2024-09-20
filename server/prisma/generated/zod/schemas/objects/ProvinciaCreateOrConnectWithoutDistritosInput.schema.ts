import { z } from 'zod';
import { ProvinciaWhereUniqueInputObjectSchema } from './ProvinciaWhereUniqueInput.schema';
import { ProvinciaCreateWithoutDistritosInputObjectSchema } from './ProvinciaCreateWithoutDistritosInput.schema';
import { ProvinciaUncheckedCreateWithoutDistritosInputObjectSchema } from './ProvinciaUncheckedCreateWithoutDistritosInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProvinciaCreateOrConnectWithoutDistritosInput> =
  z
    .object({
      where: z.lazy(() => ProvinciaWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ProvinciaCreateWithoutDistritosInputObjectSchema),
        z.lazy(() => ProvinciaUncheckedCreateWithoutDistritosInputObjectSchema),
      ]),
    })
    .strict();

export const ProvinciaCreateOrConnectWithoutDistritosInputObjectSchema = Schema;
