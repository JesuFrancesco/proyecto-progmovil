import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DepartmentoUpdateOneRequiredWithoutProvinciasNestedInputObjectSchema } from './DepartmentoUpdateOneRequiredWithoutProvinciasNestedInput.schema';
import { DistritoUpdateManyWithoutProvinciaNestedInputObjectSchema } from './DistritoUpdateManyWithoutProvinciaNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProvinciaUpdateWithoutUsersInput> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    departmento: z
      .lazy(
        () =>
          DepartmentoUpdateOneRequiredWithoutProvinciasNestedInputObjectSchema,
      )
      .optional(),
    distritos: z
      .lazy(() => DistritoUpdateManyWithoutProvinciaNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProvinciaUpdateWithoutUsersInputObjectSchema = Schema;
