import { z } from 'zod';
import { ProductTagWhereUniqueInputObjectSchema } from './ProductTagWhereUniqueInput.schema';
import { ProductTagUpdateWithoutProductInputObjectSchema } from './ProductTagUpdateWithoutProductInput.schema';
import { ProductTagUncheckedUpdateWithoutProductInputObjectSchema } from './ProductTagUncheckedUpdateWithoutProductInput.schema';
import { ProductTagCreateWithoutProductInputObjectSchema } from './ProductTagCreateWithoutProductInput.schema';
import { ProductTagUncheckedCreateWithoutProductInputObjectSchema } from './ProductTagUncheckedCreateWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductTagUpsertWithWhereUniqueWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => ProductTagWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ProductTagUpdateWithoutProductInputObjectSchema),
        z.lazy(() => ProductTagUncheckedUpdateWithoutProductInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ProductTagCreateWithoutProductInputObjectSchema),
        z.lazy(() => ProductTagUncheckedCreateWithoutProductInputObjectSchema),
      ]),
    })
    .strict();

export const ProductTagUpsertWithWhereUniqueWithoutProductInputObjectSchema =
  Schema;
