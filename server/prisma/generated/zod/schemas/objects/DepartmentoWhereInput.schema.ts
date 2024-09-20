import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { ProvinciaListRelationFilterObjectSchema } from './ProvinciaListRelationFilter.schema';
import { UserListRelationFilterObjectSchema } from './UserListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DepartmentoWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => DepartmentoWhereInputObjectSchema),
        z.lazy(() => DepartmentoWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => DepartmentoWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => DepartmentoWhereInputObjectSchema),
        z.lazy(() => DepartmentoWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    provincias: z
      .lazy(() => ProvinciaListRelationFilterObjectSchema)
      .optional(),
    users: z.lazy(() => UserListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const DepartmentoWhereInputObjectSchema = Schema;
