import { z } from 'zod';
import { ProductTagCreateWithoutTagInputObjectSchema } from './ProductTagCreateWithoutTagInput.schema';
import { ProductTagUncheckedCreateWithoutTagInputObjectSchema } from './ProductTagUncheckedCreateWithoutTagInput.schema';
import { ProductTagCreateOrConnectWithoutTagInputObjectSchema } from './ProductTagCreateOrConnectWithoutTagInput.schema';
import { ProductTagWhereUniqueInputObjectSchema } from './ProductTagWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductTagUncheckedCreateNestedManyWithoutTagInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProductTagCreateWithoutTagInputObjectSchema),
          z.lazy(() => ProductTagCreateWithoutTagInputObjectSchema).array(),
          z.lazy(() => ProductTagUncheckedCreateWithoutTagInputObjectSchema),
          z
            .lazy(() => ProductTagUncheckedCreateWithoutTagInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ProductTagCreateOrConnectWithoutTagInputObjectSchema),
          z
            .lazy(() => ProductTagCreateOrConnectWithoutTagInputObjectSchema)
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ProductTagWhereUniqueInputObjectSchema),
          z.lazy(() => ProductTagWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ProductTagUncheckedCreateNestedManyWithoutTagInputObjectSchema =
  Schema;
