import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ProvinciaUpdateManyWithoutDepartmentoNestedInputObjectSchema } from './ProvinciaUpdateManyWithoutDepartmentoNestedInput.schema';
import { UserUpdateManyWithoutDepartmentoNestedInputObjectSchema } from './UserUpdateManyWithoutDepartmentoNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DepartmentoUpdateInput> = z
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
    users: z
      .lazy(() => UserUpdateManyWithoutDepartmentoNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const DepartmentoUpdateInputObjectSchema = Schema;
