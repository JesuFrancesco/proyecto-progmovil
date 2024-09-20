import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DepartmentoUpdateOneRequiredWithoutProvinciasNestedInputObjectSchema } from './DepartmentoUpdateOneRequiredWithoutProvinciasNestedInput.schema';
import { DistritoUpdateManyWithoutProvinciaNestedInputObjectSchema } from './DistritoUpdateManyWithoutProvinciaNestedInput.schema';
import { UserUpdateManyWithoutProvinciaNestedInputObjectSchema } from './UserUpdateManyWithoutProvinciaNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProvinciaUpdateInput> = z
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
    users: z
      .lazy(() => UserUpdateManyWithoutProvinciaNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProvinciaUpdateInputObjectSchema = Schema;
