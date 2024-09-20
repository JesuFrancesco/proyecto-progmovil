import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUpdateManyWithoutDepartmentoNestedInputObjectSchema } from './UserUpdateManyWithoutDepartmentoNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DepartmentoUpdateWithoutProvinciasInput> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    users: z
      .lazy(() => UserUpdateManyWithoutDepartmentoNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const DepartmentoUpdateWithoutProvinciasInputObjectSchema = Schema;
