import { z } from 'zod';
import { BrandSellerCreateNestedOneWithoutProductsInputObjectSchema } from './BrandSellerCreateNestedOneWithoutProductsInput.schema';
import { ProductAttachmentCreateNestedManyWithoutProductInputObjectSchema } from './ProductAttachmentCreateNestedManyWithoutProductInput.schema';
import { ProductTagCreateNestedManyWithoutProductInputObjectSchema } from './ProductTagCreateNestedManyWithoutProductInput.schema';
import { ProductQuestionCreateNestedManyWithoutProductInputObjectSchema } from './ProductQuestionCreateNestedManyWithoutProductInput.schema';
import { WishlistItemCreateNestedManyWithoutProductInputObjectSchema } from './WishlistItemCreateNestedManyWithoutProductInput.schema';
import { OrderItemCreateNestedManyWithoutProductInputObjectSchema } from './OrderItemCreateNestedManyWithoutProductInput.schema';
import { MarketProductCreateNestedManyWithoutProductInputObjectSchema } from './MarketProductCreateNestedManyWithoutProductInput.schema';
import { ProductRatingCreateNestedManyWithoutProductInputObjectSchema } from './ProductRatingCreateNestedManyWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateWithoutCartItemsInput> = z
  .object({
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
    brandSeller: z.lazy(
      () => BrandSellerCreateNestedOneWithoutProductsInputObjectSchema,
    ),
    productAttachments: z
      .lazy(
        () => ProductAttachmentCreateNestedManyWithoutProductInputObjectSchema,
      )
      .optional(),
    productTags: z
      .lazy(() => ProductTagCreateNestedManyWithoutProductInputObjectSchema)
      .optional(),
    productQuestions: z
      .lazy(
        () => ProductQuestionCreateNestedManyWithoutProductInputObjectSchema,
      )
      .optional(),
    wishlistItems: z
      .lazy(() => WishlistItemCreateNestedManyWithoutProductInputObjectSchema)
      .optional(),
    orderItems: z
      .lazy(() => OrderItemCreateNestedManyWithoutProductInputObjectSchema)
      .optional(),
    marketProducts: z
      .lazy(() => MarketProductCreateNestedManyWithoutProductInputObjectSchema)
      .optional(),
    productRatings: z
      .lazy(() => ProductRatingCreateNestedManyWithoutProductInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProductCreateWithoutCartItemsInputObjectSchema = Schema;
