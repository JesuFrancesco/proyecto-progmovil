import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DistritoUncheckedUpdateManyWithoutProvinciaNestedInputObjectSchema } from './DistritoUncheckedUpdateManyWithoutProvinciaNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProvinciaUncheckedUpdateWithoutUsersInput> = z
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
    distritos: z
      .lazy(
        () =>
          DistritoUncheckedUpdateManyWithoutProvinciaNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ProvinciaUncheckedUpdateWithoutUsersInputObjectSchema = Schema;
