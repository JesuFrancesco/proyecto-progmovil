import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => MarketScalarWhereInputObjectSchema),
        z.lazy(() => MarketScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => MarketScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => MarketScalarWhereInputObjectSchema),
        z.lazy(() => MarketScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    contactEmail: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    contactPhone: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    accountId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
  })
  .strict();

export const MarketScalarWhereInputObjectSchema = Schema;
