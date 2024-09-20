import { z } from 'zod';
import { BrandSellerScalarWhereInputObjectSchema } from './BrandSellerScalarWhereInput.schema';
import { BrandSellerUpdateManyMutationInputObjectSchema } from './BrandSellerUpdateManyMutationInput.schema';
import { BrandSellerUncheckedUpdateManyWithoutBrandSellersInputObjectSchema } from './BrandSellerUncheckedUpdateManyWithoutBrandSellersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BrandSellerUpdateManyWithWhereWithoutCountryInput> =
  z
    .object({
      where: z.lazy(() => BrandSellerScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => BrandSellerUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            BrandSellerUncheckedUpdateManyWithoutBrandSellersInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BrandSellerUpdateManyWithWhereWithoutCountryInputObjectSchema =
  Schema;
