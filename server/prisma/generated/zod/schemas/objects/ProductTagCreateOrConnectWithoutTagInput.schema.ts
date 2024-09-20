import { z } from 'zod';
import { ProductTagWhereUniqueInputObjectSchema } from './ProductTagWhereUniqueInput.schema';
import { ProductTagCreateWithoutTagInputObjectSchema } from './ProductTagCreateWithoutTagInput.schema';
import { ProductTagUncheckedCreateWithoutTagInputObjectSchema } from './ProductTagUncheckedCreateWithoutTagInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductTagCreateOrConnectWithoutTagInput> = z
  .object({
    where: z.lazy(() => ProductTagWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ProductTagCreateWithoutTagInputObjectSchema),
      z.lazy(() => ProductTagUncheckedCreateWithoutTagInputObjectSchema),
    ]),
  })
  .strict();

export const ProductTagCreateOrConnectWithoutTagInputObjectSchema = Schema;
