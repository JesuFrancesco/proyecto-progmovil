import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { AccountRelationFilterObjectSchema } from './AccountRelationFilter.schema';
import { AccountWhereInputObjectSchema } from './AccountWhereInput.schema';
import { MarketProductListRelationFilterObjectSchema } from './MarketProductListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => MarketWhereInputObjectSchema),
        z.lazy(() => MarketWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => MarketWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => MarketWhereInputObjectSchema),
        z.lazy(() => MarketWhereInputObjectSchema).array(),
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
    account: z
      .union([
        z.lazy(() => AccountRelationFilterObjectSchema),
        z.lazy(() => AccountWhereInputObjectSchema),
      ])
      .optional(),
    marketProducts: z
      .lazy(() => MarketProductListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const MarketWhereInputObjectSchema = Schema;
