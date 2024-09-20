import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ShoppingCartScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ShoppingCartScalarWhereInputObjectSchema),
        z.lazy(() => ShoppingCartScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ShoppingCartScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ShoppingCartScalarWhereInputObjectSchema),
        z.lazy(() => ShoppingCartScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    userId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
  })
  .strict();

export const ShoppingCartScalarWhereInputObjectSchema = Schema;
