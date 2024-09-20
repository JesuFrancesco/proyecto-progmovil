import { z } from 'zod';
import { MarketProductScalarWhereInputObjectSchema } from './MarketProductScalarWhereInput.schema';
import { MarketProductUpdateManyMutationInputObjectSchema } from './MarketProductUpdateManyMutationInput.schema';
import { MarketProductUncheckedUpdateManyWithoutMarketProductsInputObjectSchema } from './MarketProductUncheckedUpdateManyWithoutMarketProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketProductUpdateManyWithWhereWithoutMarketInput> =
  z
    .object({
      where: z.lazy(() => MarketProductScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => MarketProductUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            MarketProductUncheckedUpdateManyWithoutMarketProductsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MarketProductUpdateManyWithWhereWithoutMarketInputObjectSchema =
  Schema;
