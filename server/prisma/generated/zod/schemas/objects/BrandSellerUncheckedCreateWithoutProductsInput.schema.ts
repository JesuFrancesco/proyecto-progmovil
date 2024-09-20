import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BrandSellerUncheckedCreateWithoutProductsInput> =
  z
    .object({
      id: z.number().optional(),
      name: z.string(),
      countryOrigin: z.string(),
      referenceLocation: z.string(),
      countryId: z.number(),
    })
    .strict();

export const BrandSellerUncheckedCreateWithoutProductsInputObjectSchema =
  Schema;
