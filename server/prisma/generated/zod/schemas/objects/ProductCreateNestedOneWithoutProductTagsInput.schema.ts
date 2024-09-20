import { z } from 'zod';
import { ProductCreateWithoutProductTagsInputObjectSchema } from './ProductCreateWithoutProductTagsInput.schema';
import { ProductUncheckedCreateWithoutProductTagsInputObjectSchema } from './ProductUncheckedCreateWithoutProductTagsInput.schema';
import { ProductCreateOrConnectWithoutProductTagsInputObjectSchema } from './ProductCreateOrConnectWithoutProductTagsInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateNestedOneWithoutProductTagsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProductCreateWithoutProductTagsInputObjectSchema),
          z.lazy(
            () => ProductUncheckedCreateWithoutProductTagsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ProductCreateOrConnectWithoutProductTagsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const ProductCreateNestedOneWithoutProductTagsInputObjectSchema = Schema;
