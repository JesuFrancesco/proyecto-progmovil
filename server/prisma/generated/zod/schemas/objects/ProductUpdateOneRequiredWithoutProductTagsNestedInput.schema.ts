import { z } from 'zod';
import { ProductCreateWithoutProductTagsInputObjectSchema } from './ProductCreateWithoutProductTagsInput.schema';
import { ProductUncheckedCreateWithoutProductTagsInputObjectSchema } from './ProductUncheckedCreateWithoutProductTagsInput.schema';
import { ProductCreateOrConnectWithoutProductTagsInputObjectSchema } from './ProductCreateOrConnectWithoutProductTagsInput.schema';
import { ProductUpsertWithoutProductTagsInputObjectSchema } from './ProductUpsertWithoutProductTagsInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithoutProductTagsInputObjectSchema } from './ProductUpdateWithoutProductTagsInput.schema';
import { ProductUncheckedUpdateWithoutProductTagsInputObjectSchema } from './ProductUncheckedUpdateWithoutProductTagsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpdateOneRequiredWithoutProductTagsNestedInput> =
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
      upsert: z
        .lazy(() => ProductUpsertWithoutProductTagsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ProductUpdateWithoutProductTagsInputObjectSchema),
          z.lazy(
            () => ProductUncheckedUpdateWithoutProductTagsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const ProductUpdateOneRequiredWithoutProductTagsNestedInputObjectSchema =
  Schema;
