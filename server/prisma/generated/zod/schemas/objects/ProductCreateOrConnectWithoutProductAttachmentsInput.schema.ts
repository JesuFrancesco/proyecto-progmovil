import { z } from 'zod';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductCreateWithoutProductAttachmentsInputObjectSchema } from './ProductCreateWithoutProductAttachmentsInput.schema';
import { ProductUncheckedCreateWithoutProductAttachmentsInputObjectSchema } from './ProductUncheckedCreateWithoutProductAttachmentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateOrConnectWithoutProductAttachmentsInput> =
  z
    .object({
      where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ProductCreateWithoutProductAttachmentsInputObjectSchema),
        z.lazy(
          () =>
            ProductUncheckedCreateWithoutProductAttachmentsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProductCreateOrConnectWithoutProductAttachmentsInputObjectSchema =
  Schema;
