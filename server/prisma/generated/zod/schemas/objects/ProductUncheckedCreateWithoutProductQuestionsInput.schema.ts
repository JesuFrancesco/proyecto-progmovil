import { z } from 'zod';
import { ProductAttachmentUncheckedCreateNestedManyWithoutProductInputObjectSchema } from './ProductAttachmentUncheckedCreateNestedManyWithoutProductInput.schema';
import { ProductTagUncheckedCreateNestedManyWithoutProductInputObjectSchema } from './ProductTagUncheckedCreateNestedManyWithoutProductInput.schema';
import { CartItemUncheckedCreateNestedManyWithoutProductInputObjectSchema } from './CartItemUncheckedCreateNestedManyWithoutProductInput.schema';
import { WishlistItemUncheckedCreateNestedManyWithoutProductInputObjectSchema } from './WishlistItemUncheckedCreateNestedManyWithoutProductInput.schema';
import { OrderItemUncheckedCreateNestedManyWithoutProductInputObjectSchema } from './OrderItemUncheckedCreateNestedManyWithoutProductInput.schema';
import { MarketProductUncheckedCreateNestedManyWithoutProductInputObjectSchema } from './MarketProductUncheckedCreateNestedManyWithoutProductInput.schema';
import { ProductRatingUncheckedCreateNestedManyWithoutProductInputObjectSchema } from './ProductRatingUncheckedCreateNestedManyWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUncheckedCreateWithoutProductQuestionsInput> =
  z
    .object({
      id: z.number().optional(),
      name: z.string(),
      stock: z.number(),
      price: z.number(),
      dimensions: z.string().optional().nullable(),
      warranty: z.boolean().optional().nullable(),
      discount: z.number().optional().nullable(),
      peso: z.number().optional().nullable(),
      formato: z.string().optional().nullable(),
      anhoEdicion: z.number().optional().nullable(),
      numeroPaginas: z.number().optional().nullable(),
      sellerId: z.number(),
      productAttachments: z
        .lazy(
          () =>
            ProductAttachmentUncheckedCreateNestedManyWithoutProductInputObjectSchema,
        )
        .optional(),
      productTags: z
        .lazy(
          () =>
            ProductTagUncheckedCreateNestedManyWithoutProductInputObjectSchema,
        )
        .optional(),
      cartItems: z
        .lazy(
          () =>
            CartItemUncheckedCreateNestedManyWithoutProductInputObjectSchema,
        )
        .optional(),
      wishlistItems: z
        .lazy(
          () =>
            WishlistItemUncheckedCreateNestedManyWithoutProductInputObjectSchema,
        )
        .optional(),
      orderItems: z
        .lazy(
          () =>
            OrderItemUncheckedCreateNestedManyWithoutProductInputObjectSchema,
        )
        .optional(),
      marketProducts: z
        .lazy(
          () =>
            MarketProductUncheckedCreateNestedManyWithoutProductInputObjectSchema,
        )
        .optional(),
      productRatings: z
        .lazy(
          () =>
            ProductRatingUncheckedCreateNestedManyWithoutProductInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const ProductUncheckedCreateWithoutProductQuestionsInputObjectSchema =
  Schema;
