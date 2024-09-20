import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DepartmentoUpdateOneRequiredWithoutProvinciasNestedInputObjectSchema } from './DepartmentoUpdateOneRequiredWithoutProvinciasNestedInput.schema';
import { UserUpdateManyWithoutProvinciaNestedInputObjectSchema } from './UserUpdateManyWithoutProvinciaNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProvinciaUpdateWithoutDistritosInput> = z
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
    users: z
      .lazy(() => UserUpdateManyWithoutProvinciaNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProvinciaUpdateWithoutDistritosInputObjectSchema = Schema;
