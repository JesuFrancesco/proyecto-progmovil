import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUncheckedUpdateManyWithoutDistritoNestedInputObjectSchema } from './UserUncheckedUpdateManyWithoutDistritoNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DistritoUncheckedUpdateWithoutProvinciaInput> = z
  .object({
    id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    users: z
      .lazy(() => UserUncheckedUpdateManyWithoutDistritoNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const DistritoUncheckedUpdateWithoutProvinciaInputObjectSchema = Schema;
