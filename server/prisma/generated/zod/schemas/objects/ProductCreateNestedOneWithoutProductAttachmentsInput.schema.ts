import { z } from 'zod';
import { ProductCreateWithoutProductAttachmentsInputObjectSchema } from './ProductCreateWithoutProductAttachmentsInput.schema';
import { ProductUncheckedCreateWithoutProductAttachmentsInputObjectSchema } from './ProductUncheckedCreateWithoutProductAttachmentsInput.schema';
import { ProductCreateOrConnectWithoutProductAttachmentsInputObjectSchema } from './ProductCreateOrConnectWithoutProductAttachmentsInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateNestedOneWithoutProductAttachmentsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProductCreateWithoutProductAttachmentsInputObjectSchema),
          z.lazy(
            () =>
              ProductUncheckedCreateWithoutProductAttachmentsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            ProductCreateOrConnectWithoutProductAttachmentsInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const ProductCreateNestedOneWithoutProductAttachmentsInputObjectSchema =
  Schema;
