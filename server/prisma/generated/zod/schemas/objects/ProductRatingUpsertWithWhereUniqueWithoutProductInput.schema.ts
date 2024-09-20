import { z } from 'zod';
import { ProductRatingWhereUniqueInputObjectSchema } from './ProductRatingWhereUniqueInput.schema';
import { ProductRatingUpdateWithoutProductInputObjectSchema } from './ProductRatingUpdateWithoutProductInput.schema';
import { ProductRatingUncheckedUpdateWithoutProductInputObjectSchema } from './ProductRatingUncheckedUpdateWithoutProductInput.schema';
import { ProductRatingCreateWithoutProductInputObjectSchema } from './ProductRatingCreateWithoutProductInput.schema';
import { ProductRatingUncheckedCreateWithoutProductInputObjectSchema } from './ProductRatingUncheckedCreateWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductRatingUpsertWithWhereUniqueWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => ProductRatingWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ProductRatingUpdateWithoutProductInputObjectSchema),
        z.lazy(
          () => ProductRatingUncheckedUpdateWithoutProductInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => ProductRatingCreateWithoutProductInputObjectSchema),
        z.lazy(
          () => ProductRatingUncheckedCreateWithoutProductInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProductRatingUpsertWithWhereUniqueWithoutProductInputObjectSchema =
  Schema;
