import { z } from 'zod';
import { ProductRatingWhereUniqueInputObjectSchema } from './ProductRatingWhereUniqueInput.schema';
import { ProductRatingCreateWithoutUserInputObjectSchema } from './ProductRatingCreateWithoutUserInput.schema';
import { ProductRatingUncheckedCreateWithoutUserInputObjectSchema } from './ProductRatingUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductRatingCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => ProductRatingWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ProductRatingCreateWithoutUserInputObjectSchema),
      z.lazy(() => ProductRatingUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const ProductRatingCreateOrConnectWithoutUserInputObjectSchema = Schema;
