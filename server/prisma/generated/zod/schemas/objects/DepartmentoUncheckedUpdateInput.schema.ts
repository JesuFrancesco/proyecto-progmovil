import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ProvinciaUncheckedUpdateManyWithoutDepartmentoNestedInputObjectSchema } from './ProvinciaUncheckedUpdateManyWithoutDepartmentoNestedInput.schema';
import { UserUncheckedUpdateManyWithoutDepartmentoNestedInputObjectSchema } from './UserUncheckedUpdateManyWithoutDepartmentoNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DepartmentoUncheckedUpdateInput> = z
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
    users: z
      .lazy(
        () => UserUncheckedUpdateManyWithoutDepartmentoNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const DepartmentoUncheckedUpdateInputObjectSchema = Schema;
