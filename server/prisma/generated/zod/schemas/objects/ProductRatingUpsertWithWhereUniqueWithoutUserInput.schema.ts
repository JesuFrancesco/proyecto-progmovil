import { z } from 'zod';
import { ProductRatingWhereUniqueInputObjectSchema } from './ProductRatingWhereUniqueInput.schema';
import { ProductRatingUpdateWithoutUserInputObjectSchema } from './ProductRatingUpdateWithoutUserInput.schema';
import { ProductRatingUncheckedUpdateWithoutUserInputObjectSchema } from './ProductRatingUncheckedUpdateWithoutUserInput.schema';
import { ProductRatingCreateWithoutUserInputObjectSchema } from './ProductRatingCreateWithoutUserInput.schema';
import { ProductRatingUncheckedCreateWithoutUserInputObjectSchema } from './ProductRatingUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductRatingUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => ProductRatingWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ProductRatingUpdateWithoutUserInputObjectSchema),
        z.lazy(() => ProductRatingUncheckedUpdateWithoutUserInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ProductRatingCreateWithoutUserInputObjectSchema),
        z.lazy(() => ProductRatingUncheckedCreateWithoutUserInputObjectSchema),
      ]),
    })
    .strict();

export const ProductRatingUpsertWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
