import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DecimalNullableFilterObjectSchema } from './DecimalNullableFilter.schema';
import { BrandSellerRelationFilterObjectSchema } from './BrandSellerRelationFilter.schema';
import { BrandSellerWhereInputObjectSchema } from './BrandSellerWhereInput.schema';
import { ProductAttachmentListRelationFilterObjectSchema } from './ProductAttachmentListRelationFilter.schema';
import { ProductTagListRelationFilterObjectSchema } from './ProductTagListRelationFilter.schema';
import { ProductQuestionListRelationFilterObjectSchema } from './ProductQuestionListRelationFilter.schema';
import { CartItemListRelationFilterObjectSchema } from './CartItemListRelationFilter.schema';
import { WishlistItemListRelationFilterObjectSchema } from './WishlistItemListRelationFilter.schema';
import { OrderItemListRelationFilterObjectSchema } from './OrderItemListRelationFilter.schema';
import { MarketProductListRelationFilterObjectSchema } from './MarketProductListRelationFilter.schema';
import { ProductRatingListRelationFilterObjectSchema } from './ProductRatingListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ProductWhereInputObjectSchema),
        z.lazy(() => ProductWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ProductWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ProductWhereInputObjectSchema),
        z.lazy(() => ProductWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    stock: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    price: z
      .union([z.lazy(() => DecimalFilterObjectSchema), z.number()])
      .optional(),
    dimensions: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    warranty: z
      .union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()])
      .optional()
      .nullable(),
    discount: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    peso: z
      .union([z.lazy(() => DecimalNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    formato: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    anhoEdicion: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    numeroPaginas: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    sellerId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    brandSeller: z
      .union([
        z.lazy(() => BrandSellerRelationFilterObjectSchema),
        z.lazy(() => BrandSellerWhereInputObjectSchema),
      ])
      .optional(),
    productAttachments: z
      .lazy(() => ProductAttachmentListRelationFilterObjectSchema)
      .optional(),
    productTags: z
      .lazy(() => ProductTagListRelationFilterObjectSchema)
      .optional(),
    productQuestions: z
      .lazy(() => ProductQuestionListRelationFilterObjectSchema)
      .optional(),
    cartItems: z.lazy(() => CartItemListRelationFilterObjectSchema).optional(),
    wishlistItems: z
      .lazy(() => WishlistItemListRelationFilterObjectSchema)
      .optional(),
    orderItems: z
      .lazy(() => OrderItemListRelationFilterObjectSchema)
      .optional(),
    marketProducts: z
      .lazy(() => MarketProductListRelationFilterObjectSchema)
      .optional(),
    productRatings: z
      .lazy(() => ProductRatingListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const ProductWhereInputObjectSchema = Schema;
