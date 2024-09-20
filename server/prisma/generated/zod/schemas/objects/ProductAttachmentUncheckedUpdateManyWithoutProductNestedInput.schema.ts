import { z } from 'zod';
import { ProductAttachmentCreateWithoutProductInputObjectSchema } from './ProductAttachmentCreateWithoutProductInput.schema';
import { ProductAttachmentUncheckedCreateWithoutProductInputObjectSchema } from './ProductAttachmentUncheckedCreateWithoutProductInput.schema';
import { ProductAttachmentCreateOrConnectWithoutProductInputObjectSchema } from './ProductAttachmentCreateOrConnectWithoutProductInput.schema';
import { ProductAttachmentUpsertWithWhereUniqueWithoutProductInputObjectSchema } from './ProductAttachmentUpsertWithWhereUniqueWithoutProductInput.schema';
import { ProductAttachmentWhereUniqueInputObjectSchema } from './ProductAttachmentWhereUniqueInput.schema';
import { ProductAttachmentUpdateWithWhereUniqueWithoutProductInputObjectSchema } from './ProductAttachmentUpdateWithWhereUniqueWithoutProductInput.schema';
import { ProductAttachmentUpdateManyWithWhereWithoutProductInputObjectSchema } from './ProductAttachmentUpdateManyWithWhereWithoutProductInput.schema';
import { ProductAttachmentScalarWhereInputObjectSchema } from './ProductAttachmentScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductAttachmentUncheckedUpdateManyWithoutProductNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              ProductAttachmentUpsertWithWhereUniqueWithoutProductInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProductAttachmentUpsertWithWhereUniqueWithoutProductInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => ProductAttachmentWhereUniqueInputObjectSchema),
          z.lazy(() => ProductAttachmentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ProductAttachmentWhereUniqueInputObjectSchema),
          z.lazy(() => ProductAttachmentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ProductAttachmentWhereUniqueInputObjectSchema),
          z.lazy(() => ProductAttachmentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ProductAttachmentWhereUniqueInputObjectSchema),
          z.lazy(() => ProductAttachmentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ProductAttachmentUpdateWithWhereUniqueWithoutProductInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProductAttachmentUpdateWithWhereUniqueWithoutProductInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ProductAttachmentUpdateManyWithWhereWithoutProductInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProductAttachmentUpdateManyWithWhereWithoutProductInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ProductAttachmentScalarWhereInputObjectSchema),
          z.lazy(() => ProductAttachmentScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ProductAttachmentUncheckedUpdateManyWithoutProductNestedInputObjectSchema =
  Schema;
