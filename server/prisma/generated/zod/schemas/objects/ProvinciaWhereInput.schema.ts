import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DepartmentoRelationFilterObjectSchema } from './DepartmentoRelationFilter.schema';
import { DepartmentoWhereInputObjectSchema } from './DepartmentoWhereInput.schema';
import { DistritoListRelationFilterObjectSchema } from './DistritoListRelationFilter.schema';
import { UserListRelationFilterObjectSchema } from './UserListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProvinciaWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ProvinciaWhereInputObjectSchema),
        z.lazy(() => ProvinciaWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ProvinciaWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ProvinciaWhereInputObjectSchema),
        z.lazy(() => ProvinciaWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    departmentoId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    departmento: z
      .union([
        z.lazy(() => DepartmentoRelationFilterObjectSchema),
        z.lazy(() => DepartmentoWhereInputObjectSchema),
      ])
      .optional(),
    distritos: z.lazy(() => DistritoListRelationFilterObjectSchema).optional(),
    users: z.lazy(() => UserListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const ProvinciaWhereInputObjectSchema = Schema;
