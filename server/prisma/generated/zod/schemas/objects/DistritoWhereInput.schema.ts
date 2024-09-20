import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { ProvinciaRelationFilterObjectSchema } from './ProvinciaRelationFilter.schema';
import { ProvinciaWhereInputObjectSchema } from './ProvinciaWhereInput.schema';
import { UserListRelationFilterObjectSchema } from './UserListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DistritoWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => DistritoWhereInputObjectSchema),
        z.lazy(() => DistritoWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => DistritoWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => DistritoWhereInputObjectSchema),
        z.lazy(() => DistritoWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    provinciaId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    provincia: z
      .union([
        z.lazy(() => ProvinciaRelationFilterObjectSchema),
        z.lazy(() => ProvinciaWhereInputObjectSchema),
      ])
      .optional(),
    users: z.lazy(() => UserListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const DistritoWhereInputObjectSchema = Schema;
