import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUncheckedUpdateManyWithoutProvinciaNestedInputObjectSchema } from './UserUncheckedUpdateManyWithoutProvinciaNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProvinciaUncheckedUpdateWithoutDistritosInput> =
  z
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
      departmentoId: z
        .union([
          z.number(),
          z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      users: z
        .lazy(
          () => UserUncheckedUpdateManyWithoutProvinciaNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const ProvinciaUncheckedUpdateWithoutDistritosInputObjectSchema = Schema;
