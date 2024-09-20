import { z } from 'zod';
import { ProductTagWhereUniqueInputObjectSchema } from './ProductTagWhereUniqueInput.schema';
import { ProductTagUpdateWithoutTagInputObjectSchema } from './ProductTagUpdateWithoutTagInput.schema';
import { ProductTagUncheckedUpdateWithoutTagInputObjectSchema } from './ProductTagUncheckedUpdateWithoutTagInput.schema';
import { ProductTagCreateWithoutTagInputObjectSchema } from './ProductTagCreateWithoutTagInput.schema';
import { ProductTagUncheckedCreateWithoutTagInputObjectSchema } from './ProductTagUncheckedCreateWithoutTagInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductTagUpsertWithWhereUniqueWithoutTagInput> =
  z
    .object({
      where: z.lazy(() => ProductTagWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ProductTagUpdateWithoutTagInputObjectSchema),
        z.lazy(() => ProductTagUncheckedUpdateWithoutTagInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ProductTagCreateWithoutTagInputObjectSchema),
        z.lazy(() => ProductTagUncheckedCreateWithoutTagInputObjectSchema),
      ]),
    })
    .strict();

export const ProductTagUpsertWithWhereUniqueWithoutTagInputObjectSchema =
  Schema;
