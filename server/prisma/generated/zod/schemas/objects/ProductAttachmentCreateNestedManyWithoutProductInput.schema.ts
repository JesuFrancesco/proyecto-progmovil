import { z } from 'zod';
import { ProductAttachmentCreateWithoutProductInputObjectSchema } from './ProductAttachmentCreateWithoutProductInput.schema';
import { ProductAttachmentUncheckedCreateWithoutProductInputObjectSchema } from './ProductAttachmentUncheckedCreateWithoutProductInput.schema';
import { ProductAttachmentCreateOrConnectWithoutProductInputObjectSchema } from './ProductAttachmentCreateOrConnectWithoutProductInput.schema';
import { ProductAttachmentWhereUniqueInputObjectSchema } from './ProductAttachmentWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductAttachmentCreateNestedManyWithoutProductInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProductAttachmentCreateWithoutProductInputObjectSchema),
          z
            .lazy(() => ProductAttachmentCreateWithoutProductInputObjectSchema)
            .array(),
          z.lazy(
            () =>
              ProductAttachmentUncheckedCreateWithoutProductInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProductAttachmentUncheckedCreateWithoutProductInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              ProductAttachmentCreateOrConnectWithoutProductInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProductAttachmentCreateOrConnectWithoutProductInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ProductAttachmentWhereUniqueInputObjectSchema),
          z.lazy(() => ProductAttachmentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ProductAttachmentCreateNestedManyWithoutProductInputObjectSchema =
  Schema;
