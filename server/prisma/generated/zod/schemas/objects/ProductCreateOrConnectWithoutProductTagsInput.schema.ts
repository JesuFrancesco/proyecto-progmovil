import { z } from 'zod';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductCreateWithoutProductTagsInputObjectSchema } from './ProductCreateWithoutProductTagsInput.schema';
import { ProductUncheckedCreateWithoutProductTagsInputObjectSchema } from './ProductUncheckedCreateWithoutProductTagsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateOrConnectWithoutProductTagsInput> =
  z
    .object({
      where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ProductCreateWithoutProductTagsInputObjectSchema),
        z.lazy(() => ProductUncheckedCreateWithoutProductTagsInputObjectSchema),
      ]),
    })
    .strict();

export const ProductCreateOrConnectWithoutProductTagsInputObjectSchema = Schema;
