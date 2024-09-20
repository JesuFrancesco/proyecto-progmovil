import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUpdateManyWithoutDistritoNestedInputObjectSchema } from './UserUpdateManyWithoutDistritoNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DistritoUpdateWithoutProvinciaInput> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    users: z
      .lazy(() => UserUpdateManyWithoutDistritoNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const DistritoUpdateWithoutProvinciaInputObjectSchema = Schema;
