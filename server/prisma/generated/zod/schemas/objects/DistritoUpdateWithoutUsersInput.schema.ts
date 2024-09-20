import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ProvinciaUpdateOneRequiredWithoutDistritosNestedInputObjectSchema } from './ProvinciaUpdateOneRequiredWithoutDistritosNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DistritoUpdateWithoutUsersInput> = z
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
  })
  .strict();

export const DistritoUpdateWithoutUsersInputObjectSchema = Schema;
