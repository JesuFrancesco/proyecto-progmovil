import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ProvinciaUncheckedUpdateManyWithoutDepartmentoNestedInputObjectSchema } from './ProvinciaUncheckedUpdateManyWithoutDepartmentoNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DepartmentoUncheckedUpdateWithoutUsersInput> = z
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
    provincias: z
      .lazy(
        () =>
          ProvinciaUncheckedUpdateManyWithoutDepartmentoNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const DepartmentoUncheckedUpdateWithoutUsersInputObjectSchema = Schema;
