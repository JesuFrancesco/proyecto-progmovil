import { z } from 'zod';
import { ProductCreateWithoutCartItemsInputObjectSchema } from './ProductCreateWithoutCartItemsInput.schema';
import { ProductUncheckedCreateWithoutCartItemsInputObjectSchema } from './ProductUncheckedCreateWithoutCartItemsInput.schema';
import { ProductCreateOrConnectWithoutCartItemsInputObjectSchema } from './ProductCreateOrConnectWithoutCartItemsInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateNestedOneWithoutCartItemsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ProductCreateWithoutCartItemsInputObjectSchema),
        z.lazy(() => ProductUncheckedCreateWithoutCartItemsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ProductCreateOrConnectWithoutCartItemsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ProductCreateNestedOneWithoutCartItemsInputObjectSchema = Schema;
