import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ProvinciaUpdateManyWithoutDepartmentoNestedInputObjectSchema } from './ProvinciaUpdateManyWithoutDepartmentoNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DepartmentoUpdateWithoutUsersInput> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    provincias: z
      .lazy(() => ProvinciaUpdateManyWithoutDepartmentoNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const DepartmentoUpdateWithoutUsersInputObjectSchema = Schema;
