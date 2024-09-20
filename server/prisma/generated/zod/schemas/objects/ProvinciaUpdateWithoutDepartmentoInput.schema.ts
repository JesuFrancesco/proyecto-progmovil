import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DistritoUpdateManyWithoutProvinciaNestedInputObjectSchema } from './DistritoUpdateManyWithoutProvinciaNestedInput.schema';
import { UserUpdateManyWithoutProvinciaNestedInputObjectSchema } from './UserUpdateManyWithoutProvinciaNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProvinciaUpdateWithoutDepartmentoInput> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    distritos: z
      .lazy(() => DistritoUpdateManyWithoutProvinciaNestedInputObjectSchema)
      .optional(),
    users: z
      .lazy(() => UserUpdateManyWithoutProvinciaNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProvinciaUpdateWithoutDepartmentoInputObjectSchema = Schema;
