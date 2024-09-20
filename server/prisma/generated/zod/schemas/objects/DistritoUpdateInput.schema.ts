import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ProvinciaUpdateOneRequiredWithoutDistritosNestedInputObjectSchema } from './ProvinciaUpdateOneRequiredWithoutDistritosNestedInput.schema';
import { UserUpdateManyWithoutDistritoNestedInputObjectSchema } from './UserUpdateManyWithoutDistritoNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DistritoUpdateInput> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    provincia: z
      .lazy(
        () => ProvinciaUpdateOneRequiredWithoutDistritosNestedInputObjectSchema,
      )
      .optional(),
    users: z
      .lazy(() => UserUpdateManyWithoutDistritoNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const DistritoUpdateInputObjectSchema = Schema;
