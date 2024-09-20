import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { BrandSellerOrderByWithRelationInputObjectSchema } from './BrandSellerOrderByWithRelationInput.schema';
import { ProductAttachmentOrderByRelationAggregateInputObjectSchema } from './ProductAttachmentOrderByRelationAggregateInput.schema';
import { ProductTagOrderByRelationAggregateInputObjectSchema } from './ProductTagOrderByRelationAggregateInput.schema';
import { ProductQuestionOrderByRelationAggregateInputObjectSchema } from './ProductQuestionOrderByRelationAggregateInput.schema';
import { CartItemOrderByRelationAggregateInputObjectSchema } from './CartItemOrderByRelationAggregateInput.schema';
import { WishlistItemOrderByRelationAggregateInputObjectSchema } from './WishlistItemOrderByRelationAggregateInput.schema';
import { OrderItemOrderByRelationAggregateInputObjectSchema } from './OrderItemOrderByRelationAggregateInput.schema';
import { MarketProductOrderByRelationAggregateInputObjectSchema } from './MarketProductOrderByRelationAggregateInput.schema';
import { ProductRatingOrderByRelationAggregateInputObjectSchema } from './ProductRatingOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    stock: z.lazy(() => SortOrderSchema).optional(),
    price: z.lazy(() => SortOrderSchema).optional(),
    dimensions: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    warranty: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    discount: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    peso: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    formato: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    anhoEdicion: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    numeroPaginas: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    sellerId: z.lazy(() => SortOrderSchema).optional(),
    brandSeller: z
      .lazy(() => BrandSellerOrderByWithRelationInputObjectSchema)
      .optional(),
    productAttachments: z
      .lazy(() => ProductAttachmentOrderByRelationAggregateInputObjectSchema)
      .optional(),
    productTags: z
      .lazy(() => ProductTagOrderByRelationAggregateInputObjectSchema)
      .optional(),
    productQuestions: z
      .lazy(() => ProductQuestionOrderByRelationAggregateInputObjectSchema)
      .optional(),
    cartItems: z
      .lazy(() => CartItemOrderByRelationAggregateInputObjectSchema)
      .optional(),
    wishlistItems: z
      .lazy(() => WishlistItemOrderByRelationAggregateInputObjectSchema)
      .optional(),
    orderItems: z
      .lazy(() => OrderItemOrderByRelationAggregateInputObjectSchema)
      .optional(),
    marketProducts: z
      .lazy(() => MarketProductOrderByRelationAggregateInputObjectSchema)
      .optional(),
    productRatings: z
      .lazy(() => ProductRatingOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProductOrderByWithRelationInputObjectSchema = Schema;
