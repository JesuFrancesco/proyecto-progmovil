import { z } from 'zod';
import { ProductTagWhereUniqueInputObjectSchema } from './ProductTagWhereUniqueInput.schema';
import { ProductTagCreateWithoutProductInputObjectSchema } from './ProductTagCreateWithoutProductInput.schema';
import { ProductTagUncheckedCreateWithoutProductInputObjectSchema } from './ProductTagUncheckedCreateWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductTagCreateOrConnectWithoutProductInput> = z
  .object({
    where: z.lazy(() => ProductTagWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ProductTagCreateWithoutProductInputObjectSchema),
      z.lazy(() => ProductTagUncheckedCreateWithoutProductInputObjectSchema),
    ]),
  })
  .strict();

export const ProductTagCreateOrConnectWithoutProductInputObjectSchema = Schema;
