import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CountryWhereUniqueInput> = z
  .object({
    id: z.number().optional(),
  })
  .strict();

export const CountryWhereUniqueInputObjectSchema = Schema;
