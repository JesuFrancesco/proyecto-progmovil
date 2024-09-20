import { z } from 'zod';
import { ProductTagCreateWithoutProductInputObjectSchema } from './ProductTagCreateWithoutProductInput.schema';
import { ProductTagUncheckedCreateWithoutProductInputObjectSchema } from './ProductTagUncheckedCreateWithoutProductInput.schema';
import { ProductTagCreateOrConnectWithoutProductInputObjectSchema } from './ProductTagCreateOrConnectWithoutProductInput.schema';
import { ProductTagWhereUniqueInputObjectSchema } from './ProductTagWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductTagUncheckedCreateNestedManyWithoutProductInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProductTagCreateWithoutProductInputObjectSchema),
          z.lazy(() => ProductTagCreateWithoutProductInputObjectSchema).array(),
          z.lazy(
            () => ProductTagUncheckedCreateWithoutProductInputObjectSchema,
          ),
          z
            .lazy(
              () => ProductTagUncheckedCreateWithoutProductInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ProductTagCreateOrConnectWithoutProductInputObjectSchema,
          ),
          z
            .lazy(
              () => ProductTagCreateOrConnectWithoutProductInputObjectSchema,
            )
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

export const ProductTagUncheckedCreateNestedManyWithoutProductInputObjectSchema =
  Schema;
