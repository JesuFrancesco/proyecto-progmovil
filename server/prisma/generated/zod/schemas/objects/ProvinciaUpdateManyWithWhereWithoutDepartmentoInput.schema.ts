import { z } from 'zod';
import { ProvinciaScalarWhereInputObjectSchema } from './ProvinciaScalarWhereInput.schema';
import { ProvinciaUpdateManyMutationInputObjectSchema } from './ProvinciaUpdateManyMutationInput.schema';
import { ProvinciaUncheckedUpdateManyWithoutProvinciasInputObjectSchema } from './ProvinciaUncheckedUpdateManyWithoutProvinciasInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProvinciaUpdateManyWithWhereWithoutDepartmentoInput> =
  z
    .object({
      where: z.lazy(() => ProvinciaScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ProvinciaUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => ProvinciaUncheckedUpdateManyWithoutProvinciasInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProvinciaUpdateManyWithWhereWithoutDepartmentoInputObjectSchema =
  Schema;
