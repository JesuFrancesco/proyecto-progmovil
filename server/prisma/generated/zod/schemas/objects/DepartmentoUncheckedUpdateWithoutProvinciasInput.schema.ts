import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUncheckedUpdateManyWithoutDepartmentoNestedInputObjectSchema } from './UserUncheckedUpdateManyWithoutDepartmentoNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DepartmentoUncheckedUpdateWithoutProvinciasInput> =
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
      users: z
        .lazy(
          () =>
            UserUncheckedUpdateManyWithoutDepartmentoNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const DepartmentoUncheckedUpdateWithoutProvinciasInputObjectSchema =
  Schema;
