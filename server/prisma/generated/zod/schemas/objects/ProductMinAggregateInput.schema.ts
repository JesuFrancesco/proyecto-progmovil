import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    stock: z.literal(true).optional(),
    price: z.literal(true).optional(),
    dimensions: z.literal(true).optional(),
    warranty: z.literal(true).optional(),
    discount: z.literal(true).optional(),
    peso: z.literal(true).optional(),
    formato: z.literal(true).optional(),
    anhoEdicion: z.literal(true).optional(),
    numeroPaginas: z.literal(true).optional(),
    sellerId: z.literal(true).optional(),
  })
  .strict();

export const ProductMinAggregateInputObjectSchema = Schema;
