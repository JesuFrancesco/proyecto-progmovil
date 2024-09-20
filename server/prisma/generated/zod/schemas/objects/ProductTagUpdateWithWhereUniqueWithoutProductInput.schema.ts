import { z } from 'zod';
import { ProductTagWhereUniqueInputObjectSchema } from './ProductTagWhereUniqueInput.schema';
import { ProductTagUpdateWithoutProductInputObjectSchema } from './ProductTagUpdateWithoutProductInput.schema';
import { ProductTagUncheckedUpdateWithoutProductInputObjectSchema } from './ProductTagUncheckedUpdateWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductTagUpdateWithWhereUniqueWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => ProductTagWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ProductTagUpdateWithoutProductInputObjectSchema),
        z.lazy(() => ProductTagUncheckedUpdateWithoutProductInputObjectSchema),
      ]),
    })
    .strict();

export const ProductTagUpdateWithWhereUniqueWithoutProductInputObjectSchema =
  Schema;
