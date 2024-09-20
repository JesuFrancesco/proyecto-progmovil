import { z } from 'zod';
import { ProductTagWhereUniqueInputObjectSchema } from './ProductTagWhereUniqueInput.schema';
import { ProductTagUpdateWithoutTagInputObjectSchema } from './ProductTagUpdateWithoutTagInput.schema';
import { ProductTagUncheckedUpdateWithoutTagInputObjectSchema } from './ProductTagUncheckedUpdateWithoutTagInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductTagUpdateWithWhereUniqueWithoutTagInput> =
  z
    .object({
      where: z.lazy(() => ProductTagWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ProductTagUpdateWithoutTagInputObjectSchema),
        z.lazy(() => ProductTagUncheckedUpdateWithoutTagInputObjectSchema),
      ]),
    })
    .strict();

export const ProductTagUpdateWithWhereUniqueWithoutTagInputObjectSchema =
  Schema;
