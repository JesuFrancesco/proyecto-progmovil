import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    stock: z.lazy(() => SortOrderSchema).optional(),
    price: z.lazy(() => SortOrderSchema).optional(),
    dimensions: z.lazy(() => SortOrderSchema).optional(),
    warranty: z.lazy(() => SortOrderSchema).optional(),
    discount: z.lazy(() => SortOrderSchema).optional(),
    peso: z.lazy(() => SortOrderSchema).optional(),
    formato: z.lazy(() => SortOrderSchema).optional(),
    anhoEdicion: z.lazy(() => SortOrderSchema).optional(),
    numeroPaginas: z.lazy(() => SortOrderSchema).optional(),
    sellerId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ProductCountOrderByAggregateInputObjectSchema = Schema;
