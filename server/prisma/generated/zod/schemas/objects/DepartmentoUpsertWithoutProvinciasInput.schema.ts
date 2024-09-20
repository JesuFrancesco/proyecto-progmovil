import { z } from 'zod';
import { DepartmentoUpdateWithoutProvinciasInputObjectSchema } from './DepartmentoUpdateWithoutProvinciasInput.schema';
import { DepartmentoUncheckedUpdateWithoutProvinciasInputObjectSchema } from './DepartmentoUncheckedUpdateWithoutProvinciasInput.schema';
import { DepartmentoCreateWithoutProvinciasInputObjectSchema } from './DepartmentoCreateWithoutProvinciasInput.schema';
import { DepartmentoUncheckedCreateWithoutProvinciasInputObjectSchema } from './DepartmentoUncheckedCreateWithoutProvinciasInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DepartmentoUpsertWithoutProvinciasInput> = z
  .object({
    update: z.union([
      z.lazy(() => DepartmentoUpdateWithoutProvinciasInputObjectSchema),
      z.lazy(
        () => DepartmentoUncheckedUpdateWithoutProvinciasInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => DepartmentoCreateWithoutProvinciasInputObjectSchema),
      z.lazy(
        () => DepartmentoUncheckedCreateWithoutProvinciasInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const DepartmentoUpsertWithoutProvinciasInputObjectSchema = Schema;
